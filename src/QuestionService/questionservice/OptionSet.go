package questionservice

import "log"

type OptionSet struct {
	Number_of_Options int      //number of options for questions
	Options           []string //Set of all options
	CorrectOptions    []string //Set of Correct options(For MCQ only one will be correct, for MSQ many will be correct)

}

type OptionSetMethods interface {
	getNumber_of_options()
	setNumber_of_options()
	getOptions()
	setOptions()
	getCorrectOptions()
	setCorrectOptions()
}

func (o *OptionSet) getNumber_of_options() int {
	return o.Number_of_Options
}

// Provide Options
func (o *OptionSet) setNumber_of_options(n int) {
	if n < 0 || n > 20 {
		log.Println("setting number of options failed ,", n)
		panic("SETTING OPTIONS failed")
	}
	o.Number_of_Options = n
}

// get all the Options
func (o *OptionSet) getOptions() []string {
	return o.Options
}

// Set Choices for MCQ, MSQ
func (o *OptionSet) setOptions(ops []string) {
	for _, v := range ops {
		o.Options = append(o.Options, v)
	}
}

// Retrive Answers from OptionSet
func (o *OptionSet) getCorrectOptions() []string {
	return o.CorrectOptions
}

// Setting Answers for MCQ, MSQ, and BINARY
func (o *OptionSet) setCorrectOptions(c_ops []string) {
	for _, v := range c_ops {
		o.CorrectOptions = append(o.CorrectOptions, v)
	}
}
