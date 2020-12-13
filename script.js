console.log("Hello world!");

var startButton = document.querySelector("#startnow");

startButton.addEventListener("click", function() {
    localStorage.setItem("start");
  });

