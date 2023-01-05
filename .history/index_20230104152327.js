const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let number = 1;
  let timer = setInterval(() => {
    seconds.textContent = ;
    if (number > 10) {
      number = 0;
      seconds.textContent = ;
    }
  }, 1000);
});
