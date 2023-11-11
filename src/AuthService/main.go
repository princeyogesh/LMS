package main

import (
	"authservice/authservice"
	"log"
)

var email = "yogeshdeshpande79@gmail.com"
var password = "1234"

func main() {
	authservice.Doprint()
	id, err := authservice.Auth(email, password)
	log.Println("authenticating the id ", id)
	if err != nil {
		log.Println("Auth failed")
		//return error to request
		//return err
	}
	//add id to response of query
	//return id
}
