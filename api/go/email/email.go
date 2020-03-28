package email

import (
	"encoding/json"
	"fmt"
	"log"
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
	Status int `json:"status"`
}

func sendResponse(w http.ResponseWriter, status int) {
	// status code
	w.WriteHeader(status)
	// header
	w.Header().Set("Content-Type", "application/json")
	// body
	rb := responseBody{Status: status}
	b, err := json.Marshal(rb)
	if err != nil {
		log.Println("sendResponse: ", err)
		return
	}
	w.Write(b)
	return

}

// Handler check if the post request has a valid captcha token and then sents an
// email
func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		sendResponse(w, http.StatusNotFound)
		return
	}

	d := json.NewDecoder(r.Body)
	var b body
	err := d.Decode(&b)
	if err != nil {
		log.Println(err)
		sendResponse(w, http.StatusInternalServerError)
		return
	}

	log.Printf("%+v\n", b)
	valid, err := CheckGoogleCaptcha(b.Token)
	if err != nil || !valid {
		log.Println(err)
		sendResponse(w, http.StatusInternalServerError)
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
	msg := fmt.Sprintf("To: %v \nSubject: %v \n%v\n%v", to, b.Subject, b.Message, b.Email)
	// Authentication
	auth := smtp.PlainAuth("", from, password, host)
	// Sending email
	err = smtp.SendMail(address, auth, from, to, []byte(msg))
	if err != nil {
		log.Println(err)
		sendResponse(w, http.StatusInternalServerError)
		return
	}
	sendResponse(w, http.StatusOK)

}
