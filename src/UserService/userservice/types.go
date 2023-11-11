package userservice

type UserType struct {
	ID   string
	Name string
	Type string
}
type Student struct {
	User  UserType
	Class string
}
type Instructor struct {
	User    UserType
	subject string
}
type userinterface interface {
	getID()
	setID(id string)
	getName()
	SetName(name string)
	getType()
	setType(type_user string)
	GetUniqueUserID()
}
