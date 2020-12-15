// Write a function definition for the start button, then update eventListener with the name of the function
// Change attribute on div to display none
// Create for loop
// Change CSS within function to hide welcome page div
// Show questions div
// Dynamically generate question and answer choices
// addEventListener that listens for button clicks
// Subtract from timer when answer is wrong
// Need conditional statement

console.log("Hello world!");

questions = [
{
  question: "CSS is a style sheet language used for describing the presentation of a document written in markup language.",
  choices: ["true", "false"],
  correctAnswer: "true",
},
{
  question: "What does HTML stand for?",
  choices: ["Hyperlink Text Markup Language","HyperText Markup Language","HumanText Markup Language","None of the above"],
  correctAnswer: "HyperText Markup Language"
},
{
  question: "Variables are the _____ of programming.",
  choices: ["Adjectives","Verbs","Nouns","Adverbs"],
  correctAnswer: "Nouns"
},
{
  question: "What are the four types of positioning in CSS?",
  choices: ["Static","Relative","Absolute","Fixed","All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "What does the concat method join together?",
  choices: ["Two or more booleans","Two or more elements","Two or more functions","Two or more strings"],
  correctAnswer: "Two or more strings"
}]

var Q = 0;

var startButton = document.querySelector(".startBtn");
var jumbotron = document.getElementById("welcome");
var quizCard = document.getElementById("quiz-card");
var timeEl = document.getElementById("timer");
var listView = document.createElement('ol');


var timeInterval = setInterval(function(){
  timer.innerText = count ;
  count--;
}, 1000);

startButton.addEventListener("click", function(){
  jumbotron.setAttribute("class", "hide");
  quizCard.removeAttribute("class", "hide");
  questionCard();
})


function questionCard() {
  var currentQuestion = questions[Q];

  var questionEl = document.getElementById("question-title");
  questionEl.textContent = currentQuestion.question;
  var buttonBox = document.getElementById("button-box");
  buttonBox.innerHTML = "";

  currentQuestion.choices.forEach(function(choice) {
    var answerBtn = document.createElement("button");
    answerBtn.setAttribute("class", "btn-primary");
    answerBtn.setAttribute("value", choice)
    answerBtn.textContent = choice;
    answerBtn.onclick = questionClick
    buttonBox.appendChild(answerBtn);
  })
}

timeEl.textContent = time;


function questionClick(){
  if (this.value !== questions[Q].answer) {
    console.log('wrong');
  } else {
    correct.push(questions[Q]);
    console.log(correct);
  }
  //if statements to check right or wrong 
  Q++;
  //if statement to check if Q === questions.length
  questionCard();
}

startButton.addEventListener("click", startQuiz);


