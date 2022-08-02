var displayHours = document.getElementById("hours");
var displayMins = document.getElementById("mins");
var displaySeconds = document.getElementById("seconds");

var inputHrs = document.getElementById("userInputHrs");
var inputMins = document.getElementById("userInputMins");
var submitHrs = document.getElementById("submitHrs");
var submitMins = document.getElementById("submitMins");
var start = document.getElementById("start");

function getHrs() {
  hrs = inputHrs.value;
  if(seconds > 59 || seconds < 0 || inputMins.value > 59 || inputMins.value < 0 || inputHrs.value > 24 || inputHrs.value < 0){
    alert("Invalid Input")
  }
  inputHrs.value = "";
  showTimer();
}

function getMins() {
  mins = inputMins.value;
  if(seconds > 59 || seconds < 0 || inputMins.value > 59 || inputMins.value < 0 || inputHrs.value > 24 || inputHrs.value < 0){
    alert("Invalid Input")
  }
  inputMins.value = "";
  showTimer();
}

var hrs = 0;
var mins = 0;
var seconds = 59;

function showTimer() {
  displayHours.innerHTML = hrs;
  displayMins.innerHTML = mins;
  displaySeconds.innerHTML = seconds;
}
showTimer();

function startTimer() {
  showTimer();
  setInterval(updateTimer, 1000);
}

function updateTimer() {
  if(seconds > 59 || seconds < 0 || inputMins.value > 59 || inputMins.value < 0 || inputHrs.value > 24 || inputHrs.value < 0){
    alert("Invalid Input")
  }
  seconds = seconds - 1;
  if(seconds < 0){
    seconds = 0
  }
  if(seconds == 0) {
    alert('THE TIME IS UP!')
    seconds = 59;
    mins = mins - 1;
    if ((mins = 0)) {
      hrs = hrs - 1;
    }
  }

  if(hrs == 0 && mins == 0 && seconds == 0){
    alert("Time is up")
  }

  showTimer();
}
