//test logic to loop through and display text for questions
questionsArr.forEach(function(question, index, arr){
    // console.log(arr[index].questionNumber + ") " + arr[index].question);
    // console.log(arr[index].correctAnswer);
    // console.log(arr[index].option1);
    // console.log(arr[index].option2);
    // console.log(arr[index].option3);
    // console.log(arr[index].option4);
})


//selects random question
let random = Math.floor(Math.random() * questionsArr.length);
console.log(questionsArr[random].questionNumber)
console.log(questionsArr[random].question);
//


// grabbing elements that will need manipulating
//startscreen
let startscreenDiv = document.querySelector("#start-screen");
//div containing question and choices
let questionsDiv = document.querySelector("#questions");
//div containing question
let questionTitle = document.querySelector("#question-title");
//div containing answer choices
let choicesDiv = document.querySelector("#choices");
// div to contain "right" or "wrong after each question"
let feedbackDiv = document.querySelector("#feedback");
//screen to show at the end of the quiz
let endscreenDiv = document.querySelector("#end-screen");

const numberofOptions = [1, 2, 3, 4]

//need 4 choices divs
// let choiceBtn1 = document.createElement("button");
// let choiceBtn2 = document.createElement("button");
// let choiceBtn3 = document.createElement("button");
// let choiceBtn4 = document.createElement("button");

// choiceBtn1.textContent = "Option 1"
// choicesDiv.appendChild(choiceBtn1);

for (let i = 0; i < questionsArr.length; i++){
    questionTitle.textContent = (questionsArr[i].question);
    console.log(questionsArr[i]);
}


for (let i = 0; i< numberofOptions.length; i++) {
    let buttonEl = document.createElement("button");
    buttonEl.id = ("button"+numberofOptions[i]);
    buttonEl.textContent = ("button"+numberofOptions[i]);
    choicesDiv.appendChild(buttonEl);
}

