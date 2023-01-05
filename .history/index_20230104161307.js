const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let numberSeconds = 1;
  let numberSeconds = 1;

  setInterval(() => {
    let timer = number < 10 ? `0${number++}` : `${number++}`;
    seconds.textContent = timer;
    if (number > 9) {
      number = 0;
      seconds.textContent = timer;
      minutes.textContent = timer;
    }
  }, 1000);
});
