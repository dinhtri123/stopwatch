const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let numberSeconds = 1;
  let numberMinutes = 1;

  setInterval(() => {
    numberSeconds++;
    let timer = numberSeconds < 10 ? "0" + numberSeconds : numberSeconds;

    seconds.textContent = timer;
    if(timer === 60){
        numberMinutes++;
        minutes
    }
  }, 1000);
});
