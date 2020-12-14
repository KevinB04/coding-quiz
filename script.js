console.log("Hello world!");

questions = [
{
  firstQuestion: "CSS is a style sheet language used for describing the presentation of a document written in markup language.",
  firstChoice: "True",
  secondChoice: "False",
  correctAnswer: "firstChoice",
},
{
  secondQuestion: "What does HTML stand for?",
  firstChoice: "1. Hyperlink Text Markup Language",
  secondChoice: "2. HyperText Markup Language",
  thirdChoice: "3. HumanText Markup Language",
  fourthChoice: "4. None of the above",
  correctAnswer: "secondChoice",
},
{
  thirdQuestion: "Variables are the _____ of programming.",
  firstChoice: "Adjectives",
  secondChoice: "Verbs",
  thirdChoice: "Nouns",
  fourthChoice: "Adverbs",
  correctAnswer: "thirdChoice",
},
{
  fourthQuestion: "What are the four types of positioning in CSS?",
  firstChoice: "Static",
  secondChoice: "Relative",
  thirdChoice: "Absolute",
  fourthChoice: "Fixed",
  fifthChoice: "All of the above",
  correctAnswer: "fifthChoice",
},
{
  fifthQuestion: "What does the concat method join together?",
  firstChoice: "Two or more booleans",
  secondChoice: "Two or more elements",
  thirdChoice: "Two or more functions",
  fourthChoice: "Two or more strings",
  correctAnswer: "fourthChoice",
},]

var startButton = document.querySelector("#start-now");
var hyperLinkButton = document.querySelector("hyperlink-text-markup-language");
var hyperTextButton = document.querySelector("hypertext-markup-language");
var humanTextButton = document.querySelector("humanText-markup-language");
var noneOfButton = document.querySelector("none-of-the-above");
var trueButton = document.querySelector("true");
var falseButton = document.querySelector("false");
var adjectiveButton = document.querySelector("adjectives");
var verbButton = document.querySelector("verbs");
var nounButton = document.querySelector("nouns");
var adverbButton = document.querySelector("adverbs");
var staticButton = document.querySelector("static");
var relativeButton = document.querySelector("relative");
var absoluteButton = document.querySelector("absolute");
var fixedButton = document.querySelector("fixed");
var allButton = document.querySelector("all-of-the-above");
var booButton = document.querySelector("two-or-more-booleans");
var eleButton = document.querySelector("two-or-more-elements");
var funcButton = document.querySelector("two-or-more-functions");
var strButton = document.querySelector("two-or-more-strings");

startButton.addEventListener("click", function() {
    localStorage.setItem("start");
  });

if(hyperTextButton === true) {
  alert("Correct!");
  return;
} else {
  (hyperLinkButton || humanTextButton || noneOfButton);
  alert("Wrong!");
}

if(trueButton === true) {
  alert("Correct!");
  return;
} else {
  (falseButton === true);
  alert("Wrong!"); 
}

if(nounButton === true) {
  alert("Correct!");
  return;
} else {
  (adjectiveButton || verbButton || adverbButton === true);
  alert("Wrong!");
}

if(allButton === true) {
  alert("Correct!");
} else {
  (staticButton || relativeButton || absoluteButton || fixedButton === true);
  alert("Wrong!");
}

if(strButton === true) {
  alert("Correct!");
} else {
  (booButton || eleButton || funcButton === true) ;
  alert("Wrong!");
}  