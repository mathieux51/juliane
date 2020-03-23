package contact

import (
	"io"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")

	io.WriteString(w, `{"alive": true}`)
}

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
