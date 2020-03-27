package contact

import (
	"fmt"
	"io"
	"net/http"
)

type Body struct {
	subject string
	email   string
	message string
}

func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		// status code
		w.WriteHeader(http.StatusNotFound)
		// header
		w.Header().Set("Content-Type", "application/json")
		// body
		b := fmt.Sprintf(`{"status": %v}`, http.StatusNotFound)
		io.WriteString(w, b)
		return
	}

	// decode body
	// d := json.NewDecoder(r.Body)
	// var body Body
	// err := d.Decode(&body)
	// if err != nil {
	// 	fmt.Println(err)
	// 	// status code
	// 	w.WriteHeader(http.StatusInternalServerError)
	// 	// header
	// 	w.Header().Set("Content-Type", "application/json")
	// 	// body
	// 	b := fmt.Sprintf(`{"status": %v}`, http.StatusInternalServerError)
	// 	io.WriteString(w, b)

	// 	return
	// }

	// status code
	w.WriteHeader(http.StatusOK)
	// header
	w.Header().Set("Content-Type", "application/json")
	// body
	b := fmt.Sprintf(`{"status": %v}`, http.StatusOK)
	io.WriteString(w, b)
}

// func CheckGoogleCaptcha(token string) bool {
// 	var googleCaptcha string = "SECRET_KEY_HERE"
// 	req, err := http.NewRequest("POST", "https://www.google.com/recaptcha/api/siteverify", nil)
// 	q := req.URL.Query()
// 	q.Add("secret", googleCaptcha)
// 	q.Add("response", token)
// 	req.URL.RawQuery = q.Encode()
// 	client := &http.Client{}
// 	var googleResponse map[string]interface{}
// 	resp, err := client.Do(req)
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer resp.Body.Close()
// 	body, _ := ioutil.ReadAll(resp.Body)
// 	json.Unmarshal(body, &googleResponse)
// 	return googleResponse["success"].(bool)
// }

// Handler sends an email and returns 201 if ok
// func Handler(w http.ResponseWriter, r *http.Request) {
// 	// Sender data
// 	from := "jmhenderschmidt@gmail.com"
// 	password := "cErVEzA2323"
// 	// Receiver email address
// 	to := []string{
// 		"jmhenderschmidt@gmail.com",
// 	}
// 	// // smtp server configuration
// 	host := "smtp.gmail.com"
// 	port := "587"
// 	address := host + ":" + port
//
// 	// Message
// 	msg := []byte(`To: jmhenderschmidt@gmail.com
// Subject: AWESOME
// This is the email body.
// `)
// 	// Authentication
// 	auth := smtp.PlainAuth("", from, password, host)
// 	// Sending email
// 	fmt.Printf("Hander sending email: adress %v, auth %v, from %v, to %v, msm %v", address, auth, from, to, msg)
// 	// err := smtp.SendMail(address, auth, from, to, msg)
// 	// if err != nil {
// 	// 	fmt.Println(err)
// 	// 	w.WriteHeader(http.StatusInternalServerError)
// 	// 	w.Header().Set("Content-Type", "application/json")
//
// 	// 	io.WriteString(w, `{"status": "Internal Server Error"}`)
//
// 	// 	return
// 	// }
// 	fmt.Println("Handler email sent")
//
// 	w.WriteHeader(http.StatusOK)
// 	w.Header().Set("Content-Type", "application/json")
//
// 	io.WriteString(w, `{"status": "ok"}`)
// }
