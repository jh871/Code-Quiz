const startscreenDiv = document.querySelector("#start-screen");
let startBtn = document.querySelector("#start");

const questionsDiv = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");

const feedbackDiv = document.querySelector("#feedback");
const endscreenDiv = document.querySelector("#end-screen");



 //no because this only creates one button

// let optBtnClicked = null;
// let nxtBtnClicked = null;


// function disableButtons() {
//     if (optBtnClicked === false){
//         nextBtn.disabled = true;
//         optionsBtn.disabled = false;
//     } else if (optBtnClicked === true){
//         optionsBtn.disabled = true;
//         nextBtn.disabled = false;
//     }; 
// };



let qCount = 0; //will get up to 4 (5 counts)
let qChoices = qsArr[qCount].options; //new array of 4 items
choicesDiv.innerHTML=""; //sets blank page - will use later



startBtn.addEventListener("click", function(event){
    event.preventDefault(); //what does this do here?
    startscreenDiv.classList.replace("start", "hide");
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
//generates 4 buttons
    for (let i=0; i < qChoices.length; i++) {
        let optionsBtn = document.createElement("button");
        optionsBtn.id = ("button"+(i+1));
        optionsBtn.className = ("optionsBtn");
        optionsBtn.textContent = qChoices[i]; 
        choicesDiv.appendChild(optionsBtn);
        optionsBtn.addEventListener("click", answerGiven);
        };

}


//function for receiving answer
function answerGiven(event) {
    // event.target.style.border = "4px solid black";
    let answerChoice = event.target;
    answerChoice.classList.add("answerChoice");
    // console.log(qCount);
    // console.log(qsArr[qCount].correctAnswer);
    if (event.target.textContent === qsArr[qCount].correctAnswer){
        feedbackDiv.textContent = "Correct!";
    } else if (event.target.textContent !== qsArr[qCount].correctAnswer) {
        feedbackDiv.textContent = "Wrong!"
        // secondsLeft = secondsLeft - 10;
    };
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
            console.log("last q:" + (qCount+1));
            nextBtn.addEventListener("click", endGame);
        }
}

function nextQ(event) {
    let nextBtn = event.target;
    console.log(event.target);
    nextBtn.classList.add("hide");
    
    if (qCount < qsArr.length){
    qCount++;
    }
    // console.log(qCount);
    qChoices = qsArr[qCount].options;  //doesnt like this for when it goe past 5
    askQuestion();
    makeButtons();
}




// let buttons = document.querySelectorAll(".optionsBtn");
//     console.log(buttons[0]);
    
//     // answer.removeEventListener("click", answerGiven);
//     console.log(answers);












 //as soon as opt buttons made
 //when next button made
//when answer clicked
 //when next clicked
// optionsBtn.disabled = true;
// optionsBtn.disabled = false;
// nextBtn.disabled = true;
// nextBtn.disabled = false;





function endGame() {
    alert("Game over!")
};
// //loop for endGame - build function which is called
//     questionsDiv.className.replace("show", "hide");
//     endscreenDiv.className.replace("hide","show");
//     let score = secondsRemaining;
// };

//make endGame an alert for now

