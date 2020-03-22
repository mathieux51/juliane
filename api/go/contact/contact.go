package contact

import (
	"fmt"
	"io"
	"net/http"
	"net/smtp"
)

// Handler sends an email and returns 201 if ok
func Handler(w http.ResponseWriter, r *http.Request) {
	// Sender data
	from := "jmhenderschmidt@gmail.com"
	password := "cErVEzA2323"
	// Receiver email address
	to := []string{
		"jmhenderschmidt@gmail.com",
	}
	// // smtp server configuration
	host := "smtp.gmail.com"
	port := "587"
	address := host + ":" + port

	// Message
	msg := []byte("To: recipient@example.net\r\n" +
		"Subject: discount Gophers!\r\n" +
		"\r\n" +
		"This is the email body.\r\n")
	// Authentication
	auth := smtp.PlainAuth("", from, password, host)
	// Sending email
	err := smtp.SendMail(address, auth, from, to, msg)
	if err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Header().Set("Content-Type", "application/json")

		io.WriteString(w, `{"status": "Internal Server Error"}`)

		return
	}
	fmt.Println("Email Sent!")

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")

	io.WriteString(w, `{"status": "ok"}`)
}
