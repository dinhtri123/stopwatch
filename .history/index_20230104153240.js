const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let timerSeconds = 1;
  let timerMinutes = 0;
  setInterval(() => {
    let number = timerSeconds < 10 ? `0${timerSeconds++}` : `${timerSeconds++}`;
    seconds.textContent = number;
    if (timerSeconds >= 10) {
      timerSeconds = 0;
      seconds.textContent = number;
    }
    if (timerSeconds > 9) {
      timerMinutes++;
      minutes.textContent = timerMinutes;
    }
  }, 1000);
});
