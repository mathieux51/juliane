package handler

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/smtp"
	"os"
)

type body struct {
	Subject string
	Email   string
	Message string
	Token   string
}

type responseBody struct {
	Status  int    `json:"status"`
	Message string `json:"message,omitempty"`
}

func sendResponse(w http.ResponseWriter, status int, err error) {
	var message string
	if err != nil {
		message = err.Error()
	}

	// status code
	w.WriteHeader(status)
	// header
	w.Header().Set("Content-Type", "application/json")
	// body
	rb := responseBody{Status: status, Message: message}
	b, err := json.Marshal(rb)
	if err != nil {
		return
	}
	w.Write(b)
	return
}

// Handler check if the POST request has a valid captcha token and then sents an
// email
func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		sendResponse(w, http.StatusNotFound, nil)
		return
	}

	d := json.NewDecoder(r.Body)
	var b body
	err := d.Decode(&b)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, err)
		return
	}

	valid, err := checkGoogleCaptcha(b.Token)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, err)
		return
	}
	if !valid {
		sendResponse(w, http.StatusUnauthorized, errors.New("token not valid"))
		return
	}

	// Sender data
	from := os.Getenv("EMAIL_ADDRESS")
	password := os.Getenv("EMAIL_PASSWORD")
	// Receiver email address
	to := []string{
		os.Getenv("DESTINATION_EMAIL_ADDRESS"),
	}
	// smtp server configuration
	host := "smtp.gmail.com"
	port := "587"
	address := host + ":" + port

	// Message
	msg := []byte(fmt.Sprintf(`From: %v
To: %v
Subject: %v
Reply-To: %v
%v`, from, to[0], b.Subject, b.Email, b.Message))
	// Authentication
	auth := smtp.PlainAuth("", from, password, host)
	// Sending email
	err = smtp.SendMail(address, auth, from, to, msg)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, err)
		return
	}
	sendResponse(w, http.StatusOK, nil)
}

// checkGoogleCaptcha makes an API call to check the token
func checkGoogleCaptcha(token string) (bool, error) {
	secret := os.Getenv("RECAPTCHA_SERVER_SIDE")
	req, err := http.NewRequest("POST", "https://www.google.com/recaptcha/api/siteverify", nil)
	q := req.URL.Query()
	q.Add("secret", secret)
	q.Add("response", token)
	req.URL.RawQuery = q.Encode()

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return false, err
	}
	defer resp.Body.Close()

	b, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return false, err
	}

	var googleResponse map[string]interface{}
	json.Unmarshal(b, &googleResponse)
	gr, ok := googleResponse["success"]
	if !ok {
		return false, errors.New("success not in Google response")
	}

	valid, ok := gr.(bool)
	if !ok {
		return false, errors.New("failed to assert success as bool")
	}

	return valid, nil
}
