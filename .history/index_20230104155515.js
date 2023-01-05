const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let timerSeconds = 0;
  let timerMinutes = 0;
  setInterval(() => {
    let numberSeconds =
      timerSeconds < 10 ? `0${++timerSeconds}` : `${++timerSeconds}`;
    seconds.textContent = numberSeconds;
    if (timerSeconds === 10) {
      minutes.textContent =
        timerMinutes < 10 ? `0${timerMinutes++}` : `${timerMinutes++}`;
      //   console.log(timerMinutes++);
    }
    if (timerSeconds === 10) {
      timerSeconds = 0;
      seconds.textContent = numberSeconds;
    }
  }, 1000);
});
