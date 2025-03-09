const dispaly = document.getElementById("Display");
let timer = null;
let startTime = 0;
let elaspsedtime = 0;
let isrunning = false;

function start() {
  if (!isrunning) {
    startTime = Date.now() - elaspsedtime;
    timer = setInterval(update, 10);
    isrunning = true;
  }
}
function stop() {
  if (isrunning) {
    clearInterval(timer);
    elaspsedtime = Date.now() - startTime;
    isrunning = false;
  }
}
function reset() {
  clearInterval(timer);
  timer = null;
  startTime = 0;
  elaspsedtime = 0;
  isrunning = false;
  dispaly.innerText = "00:00:00:00";
}

function update() {
  const currenttime = Date.now();
  elaspsedtime = currenttime - startTime;

  let hours = Math.floor(elaspsedtime / (1000 * 60 * 60));
  let minutes = Math.floor(elaspsedtime / (1000 * 60) / 60);
  let seconds = Math.floor((elaspsedtime / 1000) % 60);
  let milliseconds = Math.floor((elaspsedtime % 1000) / 10);
  hours = hours.toString().padStart(2, 0);
  minutes = minutes.toString().padStart(2, 0);
  seconds = seconds.toString().padStart(2, 0);
  milliseconds = milliseconds.toString().padStart(2, 0);
  dispaly.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
