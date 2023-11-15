package questionservice

const ( //this const represents Questiontype
	MCQ            = "MCQ"
	DESCRIPTIVE    = "DISCRIPTIVE"
	MSQ            = "MSQ"
	BINARYQUESTION = "BINARYQUESTION" //True-False
)
const (
	NONE   = 0
	EASY   = 1
	MEDIUM = 2
	HARD   = 3
)

type Question struct {
	QuestionID              string    //unique identifier for each question
	Questiontype            string    //MCQ, MSQ, DISCRIPTIVE, BINARY etc
	QuestionString          string    //actual Question
	QuestionLabel           string    //label to question
	QuestionDifficultyLevel int       //EASY, MEDIUM, HARD, NONE
	QuestionOptionSet       OptionSet //OPTION SET will be nil if Questiontype is Discriptive
}

func (q *Question) SetQuestion(typ, question, label string, level int, o_set OptionSet) {
	q.QuestionID = "Q_1" //get uniqueID need to change this
	q.Questiontype = typ
	q.QuestionString = question
	q.QuestionLabel = label
	q.QuestionDifficultyLevel = level
	q.QuestionOptionSet = o_set
}

// create new empty questions
func NewQuestion() *Question {
	return &Question{}
}
