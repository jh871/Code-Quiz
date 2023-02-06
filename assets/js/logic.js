const startscreenDiv = document.querySelector("#start-screen");
let startBtn = document.querySelector("#start");

const questionsDiv = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");
const feedbackDiv = document.querySelector("#feedback");
/******************* 
Timer
********************/
let secondsLeft = 60;
let score = 0;
let timerDiv = document.querySelector(".timer");
let timeText = document.querySelector("#time");






/************* 
End page
*/
const endscreenDiv = document.querySelector("#end-screen");
const submitBtn = document.querySelector("#submit");
let nameInput = document.getElementById("initials");

let scoreText = document.getElementById("final-score");
scoreText.textContent = secondsLeft;

let message = document.createElement("h4");
endscreenDiv.appendChild(message);









let qCount = 0; //will get up to 4 (5 counts)
let qChoices = qsArr[qCount].options; //new array of 4 items
choicesDiv.innerHTML=""; //sets blank page - will use later



function startTimer() {
const clockRunning = setInterval(function() {
    if (secondsLeft > 1){
        secondsLeft--;
        timeText.textContent = secondsLeft;
    } else if (secondsLeft === 1){
            timeText.textContent = secondsLeft;
            secondsLeft--;
    } else {
        timeText.textContent = secondsLeft;
        if (secondsLeft < 0) {
            secondsLeft = 0;
            timeText.textContent = 0;
        };
        clearInterval(clockRunning);
        // endGame();
    }
}, 1000);
};




startBtn.addEventListener("click", function(event){
    event.preventDefault(); //what does this do here?
    startTimer();
    startscreenDiv.classList.replace("show", "hide");
    questionsDiv.classList.replace("hide", "show");
    feedbackDiv.classList.replace("hide", "show");
    askQuestion();
    makeButtons();
    
});



function askQuestion() {
    questionTitle.textContent = qsArr[qCount].question;
}






function makeButtons() {
    choicesDiv.innerHTML = "";
    for (let i=0; i < qChoices.length; i++) {
        let optionsBtn = document.createElement("button");
        optionsBtn.id = ("button"+(i+1));
        optionsBtn.className = ("optionsBtn");
        optionsBtn.textContent = qChoices[i]; 
        choicesDiv.appendChild(optionsBtn);
        choicesDiv.addEventListener("click", answerGiven);
        };

}
//function for receiving answer
function answerGiven(event) {
    let answerChoice = event.target;
    answerChoice.classList.add("answerChoice");
    if (event.target.textContent === qsArr[qCount].correctAnswer){
        feedbackDiv.textContent = "Correct!";
    } else if (event.target.textContent !== qsArr[qCount].correctAnswer) {
        feedbackDiv.textContent = "Wrong!"
        secondsLeft -= 10;
    };
    choicesDiv.removeEventListener("click", answerGiven);
    showNextButton();
}


// function for showing Next button (called when receiving answer)
function showNextButton() {
    let nextBtn = document.createElement("button");
    nextBtn.className = ("nextBtn");
    feedbackDiv.appendChild(nextBtn);
        if ((qCount+1) < qsArr.length){
            nextBtn.innerText = "Next";
            nextBtn.addEventListener("click", nextQ);

        } else if ((qCount+1) === qsArr.length) {
            nextBtn.innerText = "Done";
            nextBtn.style.backgroundColor = "red";
        }
    if (nextBtn.innerText === "Done"){
        nextBtn.addEventListener("click", endGame);
    };
}
function nextQ(event) {
    let nextBtn = event.target;
    console.log(event.target);
    nextBtn.classList.add("hide");
    feedbackDiv.textContent = "";

    if (qCount < qsArr.length){
    qCount++;
    }
    qChoices = qsArr[qCount].options;
    askQuestion(); //counts down twice as fast - triggets clock again
    makeButtons();
}

if (secondsLeft < 0) {
    secondsLeft = 0;
    timeText.textContent = 0;
}

function endGame(event) {
    
    // questionsDiv.classList.replace("show", "hide");
    // feedbackDiv.classList.replace("show", "hide");
    score = secondsLeft;
    timeText.textContent = secondsLeft;
};

// //submitsScores
// submitBtn.addEventListener("click", function(event){
//     event.preventDefault();
    
//     let initials = nameInput.value;
//     console.log(initials);
//     nameInput.value = "";
//     message.textContent = "Score saved!"
// });

