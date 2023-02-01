//test logic to loop through and display text for questions
questions.forEach(function(question, index, arr){
    // console.log(arr[index].questionNumber + ") " + arr[index].question);
    // console.log(arr[index].correctAnswer);
    // console.log(arr[index].option1);
    // console.log(arr[index].option2);
    // console.log(arr[index].option3);
    // console.log(arr[index].option4);
})

let random = Math.floor(Math.random() * questions.length);

console.log(questions[random].questionNumber)
console.log(questions[random].question)