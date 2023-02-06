

let orderedList = document.getElementById("highscores");

let initials = JSON.parse(localStorage.getItem("initials"));
let score = JSON.parse(localStorage.getItem("score"));


console.log(initials);





for (i = 0; i < initials.length; i++){
    let highScoreEntry = document.createElement("li");
highScoreEntry.textContent = (initials[i] + "  -  " + score[i]);
orderedList.appendChild(highScoreEntry);
};
