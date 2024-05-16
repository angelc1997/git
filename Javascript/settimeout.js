// setTimeout(callback, delay);
// clearTimeout(timeoutId) = cancel a timeout before it triggers

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => {
    console.log("I waited 3 seconds");
  }, 3000);
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("Timer cleared");
}

startTimer();
clearTimer();
