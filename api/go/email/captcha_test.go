package email

import (
	"testing"
)

func TestCheckGoogleCaptcha(t *testing.T) {
	const token = "03AHaCkAZ0p1eGYSOb0vhlE6ZHcpjTPYvvQOHxQ4yMirtgvol2wSUmdGi7AX6PJ__6G9BMiDKqx2yEdTFHFoDR7UcheWRFI-Q5QGIuMX1ocfOnKLIKJTRqKQQHNwVd6CfOaPgUJX528sP0mROvomgHEIwgV3Vs0sCGj4vdjsAHLo8EaNyCBkvj0yeV5R_SnOW4h52xZ0-GEe0z8jVVFwg-69MTPb9bpbKTjTc-e5Wq6eR3uWKYJtjMneZREW2kRbC-aiRRVmkvfqh4PNDlUeRUgdoP2XvZZbPb3UVCNVbnYNxckMh5m64qj9gNycpcstomQsILeVwVstnp64kYQuLy1slQGTw7SBgEAmrKHOZnJqux-zYQbD7IhEmR61gDjugGc_XqJi06K2MdEHTn1GFadWJKf6yYfXlcMtTeB7wRL0x6S7-ldaZ-RaQ"

	_, err := CheckGoogleCaptcha(token)

	// Check for errors
	if err != nil {
		t.Errorf("CheckGoogleCaptcha returned an error: got %v want %v",
			err, nil)
	}

	// Token is only valid once
	// Uncomment if test needed
	// expected := true
	// if !valid {
	// 	t.Errorf("CheckGoogleCaptcha unexpected return: got %v want %v",
	// 		valid, expected)
	// }
}
