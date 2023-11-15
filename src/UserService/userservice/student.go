package userservice

import (
	"log"
	"net/http"
)

// Getting Student ID
func (s1 *Student) getID() string {
	return s1.User.ID
}

// //////Setting ID for student
func (s1 *Student) setID(id string) {
	s1.User.ID = id
	log.Println("setting ID for student")
}

// //////Getting Name of student
func (s1 *Student) getName() string {
	return s1.User.Name
}

// //////Setting Name for student
func (s1 *Student) SetName() {
	s1.User.Type = "Student"
	log.Println("setting name for student")
}

// //////Getting  Type for student
func (s1 *Student) getType() string {
	return STUDENT
}

// //////Setting TYPE for student
func (s1 *Student) setType() {
	log.Println("setting type for student")
}

// //////Getting UniqueID for student
func (s1 *Student) GetUniqueUserID() string {
	//fetch ID through Service which is distributing unique ID to users
	resp, err := http.Get(ID_SERVER + s1.getType())
	if err != nil {
		panic(err)
	}
	if resp.StatusCode == 200 {
		log.Println("got 200 from ", ID_SERVER)
	}
	return "STUDENTID_1"
}

// create Student type object
func NewStudent(name string) *Student {
	return &Student{
		User: UserType{
			ID:   "",
			Name: name,
			Type: "Student",
		},
		Class: "jr clg",
	}
}

// Adding student to DB for persisting user
func (s1 *Student) AddtoDB() {
	log.Println("added to DB ")
}

// Create the New Student Type and add user in DB
func CreateStudent(Name string) {
	s1 := NewStudent(Name)
	s1.setID(s1.GetUniqueUserID()) //This line throws error as of 15Nov since not implemented fully
	log.Println(s1)
	s1.AddtoDB()

}

// User from web when click on login button,
// AuthService will be invoked
// email and password will be going to AUTH server,
// AUTH server has map of <email+password , userid>
// once Auth server return userid to browser,
// browsr will make another query to GetStudent(userid)
func GetStudent(id string) {
	log.Println("gettu=ing user from ID ", id)
}
