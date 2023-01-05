const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let timerSeconds = 1;
  let timerMinutes = 0;
  let timer = setInterval(() => {
    let text = timerSeconds < 10 ? `0${timerSeconds++}` : `${timerSeconds++}`;
    seconds.textContent = text;
    if (timerSeconds >= 60) {
      timerSeconds = 0;
      seconds.textContent = text;
    }
    if(tim)
  }, 1000);
});
