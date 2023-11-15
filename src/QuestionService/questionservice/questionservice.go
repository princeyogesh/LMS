package questionservice

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func Doprint() {
	fmt.Println("loaded questions service")
}

// this will handle  the endpoint /createQuestion
// we will recive requestBody in for {type, question,label, level, optionset{} }
// we will define agreement on request response at the end of all service skeleton implemented
func HandleNewCreateQuestion(c *gin.Context) {
	Ques := NewQuestion()
	var requestBody Question
	err := c.BindJSON(&requestBody)
	if err != nil {
		Ques.SetQuestion(requestBody.Questiontype, requestBody.QuestionString, requestBody.QuestionLabel, requestBody.QuestionDifficultyLevel, requestBody.QuestionOptionSet)
	} else {
		panic("Failed to fetch requestBody")
	}
	//Instead of requestBody we need to find betterway to fetch body from http request
}
