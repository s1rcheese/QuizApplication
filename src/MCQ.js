class MCQ {
    constructor(question, choice, answer, category) {
        this.question = question; //Store question
        this.choice = choice; //store choices
        this.userAnswer = -1; //Store userAnswer. 
        this.answer = answer; //store correct Answer
        this.category = category; //store questionCategory
    }

    outputQuestionFormat() { //Output Template when asking questions
        let outputTemplate = this.question;
        for (let i = 0; i < 4; i++) {
            outputTemplate += `\n(${i+1})` + this.choice[i];
        }
        return outputTemplate;
    }

    storeAnswer(userAnswer) { //store UserAnswer
        this.userAnswer = userAnswer;
    }
}
module.exports = MCQ; //export MCQ class to be used in Quiz class.