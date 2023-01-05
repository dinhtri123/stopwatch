const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let number = 1;
  setInterval(() => {
    let timer =
    number < 10 ? `0${number++}` : `${number++}`;
    seconds.textContent = numberSeconds;
    if (timerSeconds > 59) {
      timerSeconds = 0;
      seconds.textContent = numberSeconds;
      minutes.textContent =
        timerMinutes < 10 ? `0${timerMinutes++}` : `${timerMinutes++}`;
    }
  }, 1000);
});
