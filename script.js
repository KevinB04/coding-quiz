console.log("Hello world!");

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

startButton.addEventListener("click", function() {
    localStorage.setItem("start");
  });

if(hyperTextButton === true) {
  alert("Correct!");
  return;
} else(hyperLinkButton || humanTextButton || noneOfButton) {
  alert("Wrong!");
}

if(trueButton === true) {
  alert("Correct!");
  return;
} else(falseButton === true) {
  alert("Wrong!"); 
}

if(nounButton === true) {
  alert("Correct!");
  return;
} else(adjectiveButton || verbButton || adverbButton === true) {
  alert("Wrong!");
}

if(allButton === true) {
  alert("Correct!");
} else(staticButton || relativeButton || absoluteButton || fixedButton === true) {
  alert("Wrong!");
}