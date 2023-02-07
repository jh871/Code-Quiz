let orderedList = document.getElementById("highscores");

//retrieve score from local storage
let initials = JSON.parse(localStorage.getItem("initials"));
let score = JSON.parse(localStorage.getItem("score"));

//creates entry for each name in local storage
for (i = 0; i < initials.length; i++){
    let highScoreEntry = document.createElement("li");
highScoreEntry.textContent = (initials[i] + "  -  " + score[i]);
orderedList.appendChild(highScoreEntry);
};

//clears scores
let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function(event){
    localStorage.clear();
    orderedList.innerHTML = "";
})
