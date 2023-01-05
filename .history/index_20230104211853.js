const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let sec = 0;
  let min = 0;
  let hrs = 0;

  setInterval(() => {
    sec++;
    let timer = sec < 10 ? "0" + sec : sec;

    seconds.textContent = timer > 9 ? (sec = "0" + 0) : timer;
    if (timer === 10) {
      min++;
      minutes.textContent =
        min < 10 ? "0" + min : min > 9 ? (min = "0" + 0) : "0" + 0;
    }
    if (min === 10) {
      hrs++;
      hours.textContent =  < 10 ? "0" + hrs : hrs;
    }
  }, 1000);
});
