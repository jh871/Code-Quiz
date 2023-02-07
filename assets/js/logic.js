const startscreenDiv = document.querySelector("#start-screen");
const feedbackDiv = document.querySelector("#feedback");
const questionsDiv = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let questionTitle = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");

/******************* 
Timer
*******************/
let secondsLeft = 60;
let timerDiv = document.querySelector(".timer");
let timeText = document.querySelector("#time");

//count to end quiz after 5 Qs
let answerNumber = 0
/************* 
End page
*************/
const endscreenDiv = document.querySelector("#end-screen");
const submitBtn = document.querySelector("#submit");
let nameInput = document.getElementById("initials");

//capturing time as final score
let finalScore = document.getElementById("final-score");
finalScore.textContent = timeText.textContent;

//confirmation message for saving score
let message = document.createElement("h4");
endscreenDiv.appendChild(message);


//button to finish quiz and show end screen
let finishBtn = document.createElement("button");
    finishBtn.className = ("finish");
    finishBtn.innerText = "Finish"


let qCount = 0; //will get up to 4 (5 counts)
let qChoices = qsArr[qCount].options; //new array of 4 items
choicesDiv.innerHTML=""; //sets blank page - will use later



function startTimer() {
    const timer = setInterval(function() {
        if (secondsLeft > 1){
            secondsLeft--;
            timeText.textContent = secondsLeft;
        } else if (secondsLeft === 1){
            secondsLeft--;
            timeText.textContent = secondsLeft;
        } else {
            if (secondsLeft < 0) {
                secondsLeft = 0;
            };
            timeText.textContent = secondsLeft;
            clearInterval(timer);
            endGame();
        }
        if (answerGiven === qsArr.length) {
        clearInterval(timer);
        score = secondsLeft;
        timeText.textContent = score;
        }
    }, 1000);
};



//on start, screen changes to quiz
startBtn.addEventListener("click", function(event){
    event.preventDefault(); //what does this do here?
    startTimer();
    startscreenDiv.classList.replace("show", "hide");
    questionsDiv.classList.replace("hide", "show");
    feedbackDiv.classList.replace("hide", "show");
    askQuestion();
    makeButtons();
    
});

//generates Qs
function askQuestion() {
    questionTitle.textContent = qsArr[qCount].question;
}

//generates choices
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



//function for receiving answer and checking if correct
function answerGiven(event) {
    answerNumber ++;
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
            nextBtn.style.display = "none";
            feedbackDiv.appendChild(finishBtn);
            finishBtn.addEventListener("click", endGame);
        }
}

//will count questions when generating next Q
function nextQ(event) {
    let nextBtn = event.target;
    nextBtn.classList.add("hide");
    feedbackDiv.textContent = ""; //clears feedback and next
    if (qCount < qsArr.length){
    qCount++;
    }
    qChoices = qsArr[qCount].options;
    askQuestion();
    makeButtons();
}

//saves score
function endGame(event) {
    event.preventDefault();
    finalScore.textContent = timeText.textContent;
    let scoreNum = parseInt(finalScore.textContent);
//captures score and sends it to localStorage
    let score = [];
    score.push(finalScore.textContent);
    localStorage.setItem("score", JSON.stringify(score))
//swap screen to end screen
    endscreenDiv.classList.replace("hide", "show");
    questionsDiv.classList.replace("show", "hide");
    feedbackDiv.style.display = "none";
    nameInput.value = "";
    timerDiv.style.display = "none";
};

//captures initials and sends it to local storage
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    let initials = [];
    initials.push(nameInput.value);
    localStorage.setItem("initials", JSON.stringify(initials))
    //clear field
    nameInput.value = "";
    message.textContent = "Score saved!"
    submitBtn.disabled = true;
});