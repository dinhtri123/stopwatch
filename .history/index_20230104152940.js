const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let timerSeconds = 1;
  let timerMinutes = 0;
  let timer = setInterval(() => {
    let number = timerSeconds < 10 ? `0${timerSeconds++}` : `${timerSeconds++}`;
    seconds.textContent = number;
    if (timerSeconds >= 60) {
      timerSeconds = 0;
      seconds.textContent = number;
    }
    if(timerSeconds === 59){
        timerMinutes++;
        minutes.textContent = number
    }
  }, 1000);
});
