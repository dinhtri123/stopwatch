const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let number = 1;
  let timer = setInterval(() => {
    seconds.textContent = number < 10 ? `0${number++}` : `${number++}`;
  }, 1000);
  if (number >) {
    number = 1;
    clearInterval(timer);
  }
});
