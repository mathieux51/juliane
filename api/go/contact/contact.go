package contact

import (
	"io"
	"net/http"
)

// Handler sends an email and returns 201 if ok
func Handler(w http.ResponseWriter, r *http.Request) {
	// Sender data
	// from := "mathieux51@gmail.com"
	// password := "MySecretPassword"
	// // Receiver email address
	// to := []string{
	// 	"mathieux51@gmail.com",
	// }
	// // smtp server configuration
	// host := "smtp.gmail.com"
	// port := "587"
	// address := host + ":" + port

	// // Message
	// message := []byte("This is a really unimaginative message, I know.")
	// // Authentication
	// auth := smtp.PlainAuth("", from, password, host)
	// // Sending email
	// err := smtp.SendMail(address, auth, from, to, message)
	// if err != nil {
	// 	fmt.Println(err)
	// 	w.WriteHeader(http.StatusInternalServerError)
	// 	w.Header().Set("Content-Type", "application/json")

	// 	// io.WriteString(w, `{"status": "Internal Server Error"}`)

	// 	return
	// }
	// fmt.Println("Email Sent!")

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")

	io.WriteString(w, `{"status": "ok"}`)
}
