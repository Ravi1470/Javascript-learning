const display = document.getElementById("Display");

let startTime = 0;
let timer = null;
let timecal = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - timecal;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}
function stop() {
  if (isRunning) {
    clearInterval(timer);
    timecal = Date.now() - startTime;
    isRunning = false;
  }
}
function reset() {
  clearInterval(timer);
  startTime = 0;
  timecal = 0;
  isRunning = false;
  timer = null;
  display.innerText = "00:00:00:00";
}
function update() {
  const currentTime = Date.now();

  timecal = currentTime - startTime;
  let hours = Math.floor(timecal / (1000 * 60 * 60));
  let minutes = Math.floor(timecal / (1000 * 60));
  let seconds = Math.floor((timecal / 1000) % 60);
  let milliseconds = Math.floor(timecal % 60);
  hours = hours.toString().padStart(2, 0);
  minutes = minutes.toString().padStart(2, 0);
  seconds = seconds.toString().padStart(2, 0);
  milliseconds = milliseconds.toString().padStart(2, 0);
  display.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
