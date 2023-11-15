package questionservice

type OptionSet struct {
	Number_of_Options int      //number of options for questions
	Options           []string //Set of all options
	CorrectOptions    []string //Set of Correct options(For MCQ only one will be correct, for MSQ many will be correct)

}
