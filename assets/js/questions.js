const qsArr =  [
    {
        questionNumber: 1,
        question: "Question one?",
        correctAnswer: "Q1 option four",
        options: [
            "Q1 option one",
            "Q1 option two",
            "Q1 option three", 
            "Q1 option four", 
        ]
    },
    {
        questionNumber: 2,
        question: "Question two?",
        correctAnswer: "Q2 option two",
        options: [
            "Q2 option one",
            "Q2 option two",
            "Q2 option three", 
            "Q2 option four", 
        ]
    },
    {
        questionNumber: 3,
        question: "Question three?",
        correctAnswer: "This is the correct answer",
        options: [
            "Q3 option one",
            "Q3 option two",
            "Q3 option three", 
            "Q3 option four", 
        ]
    },
    {
        questionNumber: 4,
        question: "Question four?",
        correctAnswer: "This is the correct answer",
        options: [
            "Q4 option one",
            "Q4 option two",
            "Q4 option three", 
            "Q4 option four", 
        ]
    },
    {
        questionNumber: 5,
        question: "Question five?",
        correctAnswer: "This is the correct answer",
        options: [
            "Q5 option one",
            "Q5 option two",
            "Q5 option three", 
            "Q5 option four", 
        ]
    }
];


//to extract just options
// for (i=0; i<questionsArr.length; i++){
//     console.log(questionsArr[i].questionNumber);
    
// };

//change every answer to the correct answer to check that correct answer function works

/*
// Spare code:
// selects random question
function randomQ() {
    let random = Math.floor(Math.random() * questionsArr.length);
    console.log(questionsArr[random].questionNumber)
    console.log(questionsArr[random].question);
    }

// OBSELETE test logic to loop through and display text for questions
questionsArr.forEach(function(question, index, arr){
    console.log(arr[index].questionNumber + ") " + arr[index].question);
    console.log(arr[index].correctAnswer);
    console.log(arr[index].options);
    console.log(arr[index].options);
    // console.log(arr[index].option3);
    // console.log(arr[index].option4);
})
*/