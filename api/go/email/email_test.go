package email

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestHandler_get_request(t *testing.T) {
	// Create a request, nil => no query parameters
	req, err := http.NewRequest("GET", "/api/email", nil)
	if err != nil {
		t.Fatal(err)
	}

	// to record the response.
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(Handler)
	handler.ServeHTTP(rr, req)

	// Check the status code
	if status := rr.Code; status != http.StatusNotFound {
		t.Errorf("Handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Check the response body
	expected := `{"status": 404}`
	if rr.Body.String() != expected {
		t.Errorf("Handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}

func TestHandler_ok(t *testing.T) {
	// Create a request, nil => no query parameters
	req, err := http.NewRequest("POST", "/api/email", nil)
	if err != nil {
		t.Fatal(err)
	}

	// to record the response.
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(Handler)
	handler.ServeHTTP(rr, req)

	// Check the status code
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("Handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Check the response body
	expected := `{"status": 200}`
	if rr.Body.String() != expected {
		t.Errorf("Handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
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
