let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps    = document.getElementById("laps");

function timeToString(ms) {
  const hrs  = Math.floor(ms / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  const secs = Math.floor((ms % 60000)  / 1000);

  return `${hrs  .toString().padStart(2, "0")}:` +
         `${mins .toString().padStart(2, "0")}:` +
         `${secs .toString().padStart(2, "0")}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
}

function recordLap() {
  const li = document.createElement("li");
  li.textContent = timeToString(elapsedTime);
  laps.appendChild(li);
}

/* safer to attach once the DOM is ready */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start").addEventListener("click", startTimer);
  document.getElementById("pause").addEventListener("click", pauseTimer);
  document.getElementById("reset").addEventListener("click", resetTimer);
  document.getElementById("lap")  .addEventListener("click", recordLap);
});
