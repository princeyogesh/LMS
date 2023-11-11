package authservice

import (
	"errors"
	"log"
)

func Doprint() {
	log.Println("authservice loaded")
}
func Auth(email, password string) (string, error) {
	//check in redis if key == email +password exists
	//if not present send response with err
	//id:= redis.keycheck(email+password)
	if true {
		return "id", nil
	}
	return "Auth failed", errors.New("Auth failed")
}
