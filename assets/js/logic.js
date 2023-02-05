const startscreenDiv = document.querySelector("#start-screen");
let startBtn = document.querySelector("#start");

const questionsDiv = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");

const feedbackDiv = document.querySelector("#feedback");
const endscreenDiv = document.querySelector("#end-screen");


let qCount = 0; //will get up to 4 (5 counts)
let qChoices = qsArr[qCount].options; //new array of 4 items
choicesDiv.innerHTML=""; //sets blank page - will use later



startBtn.addEventListener("click", function(event){
    event.preventDefault();
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

    optionsBtn.id = ("button"+(qCount+1));

    optionsBtn.className = ("optionsBtn");

    optionsBtn.textContent = qChoices[i]; 
    //wont change text when new buttons are generated
    choicesDiv.appendChild(optionsBtn);

    optionsBtn.addEventListener("click", answerGiven) 
    };
}



//function for receiving answer
function answerGiven(event) {
    console.log(event.target);
    console.log(qCount);
    console.log(qsArr[qCount].correctAnswer);
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
            console.log(qCount+1);
        } else if ((qCount+1) === qsArr.length) {
            nextBtn.innerText = "Done";
            console.log("last q:" + (qCount+1));
            //endGame;
        }
}



function nextQ() {
    if (qCount < qsArr.length){
    qCount++;
    }
    // console.log(qCount);
    qChoices = qsArr[qCount].options;  //doesnt like this for when it goe past 5
    askQuestion();
    makeButtons();
}




// //loop for endGame - build function which is called
//     questionsDiv.className.replace("show", "hide");
//     endscreenDiv.className.replace("hide","show");
//     let score = secondsRemaining;
// };



