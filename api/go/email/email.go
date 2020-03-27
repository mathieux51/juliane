package email

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

	// status code
	w.WriteHeader(http.StatusOK)
	// header
	w.Header().Set("Content-Type", "application/json")
	// body
	b := fmt.Sprintf(`{"status": %v}`, http.StatusOK)
	io.WriteString(w, b)
}
