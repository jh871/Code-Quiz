
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
let questionCount = 0;

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


//questionsindex === questions.length
// let qNums = [];

// for (let i = 0; i < qsArr.length; i++){
// qNums[i] = qsArr[i].questionNumber;
// }
// console.log("Q nums: "+ qNums);


//map questionNumber to an array,
//loop through qNum array?

// let nextBtn = document.createElement("button");
//     nextBtn.textContent = ("Next");
//     feedbackDiv.appendChild(nextBtn);

//loop to label choices
let nextQ = qsArr.forEach(function(arr) {
    choicesDiv.innerHTML="";
    questionCount++
    console.log(questionCount);

    questionTitle.textContent = arr.question;

    let choiceSet = document.createElement("div");
    choiceSet.classList.add("choices-set");
    choicesDiv.appendChild(choiceSet)
    choiceSet.setAttribute("id", "set"+arr.questionNumber)

    for (let i = 0; i< arr.options.length; i++) {
        let buttonEl = document.createElement("button");
        buttonEl.id = ("button"+[i]);
        buttonEl.className = ("button");

    // adding labels to buttons from options
        buttonEl.textContent = arr.options[i];
        choiceSet.appendChild(buttonEl);
        buttonEl.addEventListener("click", function(event) {
        if (event.target.textContent === arr.correctAnswer){
            feedbackDiv.textContent = "Correct!";
        } else if (event.target.textContent !== arr.correctAnswer) {
            feedbackDiv.textContent = "Wrong!"
        };
        //and then generate next btn
        //run nxtQ function
    
        if (questionCount <= qsArr.length){
            nextBtn.addEventListener("click", function(event) {
            event.preventDefault
            nextQ();  
            })} else if (questionCount === qsArr.length){
                endOfQuiz();
            }
        
    
    });//eventlistener on choice button
}//for loop through options
});//qsArr foreach



//start button
let startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function(event){
    event.preventDefault();
    startscreenDiv.classList.replace("show", "hide");
    questionsDiv.classList.replace("hide", "show");
    feedbackDiv.classList.replace("hide", "show");
});



// //function for if answer is correct
// function correctAnswer() {
//     feedbackDiv.textContent = "Correct!"
//     questionCount++;
//     //generate next question
// };


// check if correct function
function checkAnswer(event) {
    
    if (event.target.textContent === arr.correctAnswer){
        feedbackDiv.textContent = "Correct!";
    } else {
        feedbackDiv.textContent = "Wrong!"
    }
}
//call
// choiceBtn.addEventListener("click", checkAnswer());








//Other stuff
//init 
// let questionCount = 0;

// //function for if selected answer is wrong
// function wrongAnswer(){
// feedbackDiv.textContent = "Wrong!"
// secondsLeft = secondsLeft - 10;
// questionCount++;
// //generate next question
// };


// //function for if answer is correct
// function correctAnswer() {
//     feedbackDiv.textContent = "Correct!"
//     questionCount++;
//     //generate next question
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
