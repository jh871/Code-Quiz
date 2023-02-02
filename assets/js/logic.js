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
function randomQ() {
let random = Math.floor(Math.random() * questionsArr.length);
console.log(questionsArr[random].questionNumber)
console.log(questionsArr[random].question);
}

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




//init 
// let questionCount = 0;

// //function for if selected answer is wrong
// function wrongAnswer(){
// feedbackDiv.textContent = "Wrong!"
// secondsLeft = secondsLeft - 10;
// questionCount++;
// //generate next question
// };

// //loop for end of game
// if (questionCount = 5){
//     questionsDiv.className.replace("show", "hide");
//     endscreenDiv.className.replace("hide","show");

//     let score = secondsRemaining;
// };

// start quiz
// function startQuiz() {
//     startscreenDiv.className.replace("show", "hide");
//     questionsDiv.className.replace("hide", "show");
//     }


//questions array = [random(), random(), random(), random()]
// question number = questions.index[i + 1]


// pulling question title from questionsArr
for (let i = 0; i < questionsArr.length; i++){
    questionTitle.textContent = (questionsArr[i].question);
};
// x = 5, i = 4
//generating 4 options
// const numberofOptions = [1, 2, 3, 4]
questionsArr.forEach(function(arr) {
    
for (let i = 0; i< arr.options.length; i++) {
    let buttonEl = document.createElement("button");
    buttonEl.id = ("button"+[i]);
    buttonEl.className = ("button");

// adding labels to buttons from options

    buttonEl.textContent = arr.options[i];


    choicesDiv.appendChild(buttonEl);

    buttonEl.addEventListener("click", function(event) {
    if (event.target.textContent === arr.correctAnswer){
        feedbackDiv.textContent = "Correct!";
    } else {
        feedbackDiv.textContent = "Wrong!"
    
    
    }});
}});


// //function for if answer is correct
// function correctAnswer() {
//     feedbackDiv.textContent = "Correct!"
//     questionCount++;
//     //generate next question
// };


//start button
let startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function(event){
    event.preventDefault();
    startscreenDiv.classList.replace("show", "hide");
    questionsDiv.classList.replace("hide", "show");
});

