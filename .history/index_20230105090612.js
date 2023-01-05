const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const milis = document.querySelector(".m")

btnStart.addEventListener("click", function () {
  let sec = 0;
  let min = 0;
  let hrs = 0;

  setInterval(() => {
    sec++;
    let timer = sec < 10 ? "0" + sec : sec;

    seconds.textContent = timer > 59 ? (sec = "0" + 0) : timer;
    if (timer === 10) {
      min++;
      let timerMin = min < 10 ? "0" + min : min;
      if (min === 60) {
        hrs++;
        hours.textContent = hrs < 10 ? "0" + hrs : hrs;
      }
      minutes.textContent = timerMin > 59 ? (min = "0" + 0) : timerMin;
    }
  }, 1000);
});
