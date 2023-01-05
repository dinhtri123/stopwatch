const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let numberSeconds = 1;
  let numberMinutes = 1;

  setInterval(() => {
    let timer =
      numberSeconds < 10 ? `0${numberSeconds++}` : `${numberSeconds++}`;
    if (number > 9) {
      number = 0;
      seconds.textContent = timer;
      minutes.textContent = timer;
    }
    if (numberSeconds < 60) {
      seconds.textContent = timer;
    }
  }, 1000);
});
