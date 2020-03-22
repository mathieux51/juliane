package contact

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestHandler(t *testing.T) {
	// Create a request
	// nil => no query parameters
	req, err := http.NewRequest("GET", "/email", nil)
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
	expected := `{"status": "ok"}`
	if rr.Body.String() != expected {
		t.Errorf("Handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}
