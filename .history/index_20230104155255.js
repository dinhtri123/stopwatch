const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let timerSeconds = 1;
  let timerMinutes = 1;
  setInterval(() => {
    let numberSeconds =
      timerSeconds < 10 ? `0${timerSeconds++}` : `${timerSeconds++}`;
    console.log(timerSeconds);
    if (timerSeconds === 10) {
      minutes.textContent =
        timerMinutes < 10 ? `0${timerMinutes++}` : `${timerMinutes++}`;
      //   console.log(timerMinutes++);
    }
    seconds.textContent = numberSeconds;
    if (timerSeconds === 10) {
      timerSeconds = 0;
      seconds.textContent = numberSeconds;
    }
  }, 1000);
});
