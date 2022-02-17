package main

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"net/http"
	"os"
)

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
