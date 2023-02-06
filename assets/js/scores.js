/*collect scores from time remaining
collect name from end screen
event listener on submit button?

get scores from local storage
push scores to local storage
*/


let orderedList = document.getElementById("highscores");


let initials = localStorage.getItem("initials");

let score = localStorage.getItem("score");
console.log(initials);

let highScoreEntry = document.createElement("li");
highScoreEntry.textContent = (initials + "  -  " + score);
orderedList.appendChild(highScoreEntry);
