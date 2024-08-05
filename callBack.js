let intervalID;
let counter = 0;

//incrementing counter by 1 every 1000 milliseconds
let startCounter = function () {
  intervalID = setInterval(() => {
    counter = counter + 1;
    console.log(counter);
  }, 1000);
};

//used clearInterval to stop output of setInterval
function stopCounter() {
  clearInterval(intervalID);
}

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

//added function startCounter as argument
startButton.addEventListener("click", startCounter);

//added function stopCounter as argument
stopButton.addEventListener("click", stopCounter);
