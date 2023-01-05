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
      let timerMin = min < 10 ? "0" + min : min;
      minutes.textContent = timerMin > 2 ? (min = "0" + 0) : min;
      if (min === 3) {
        hrs++;
        hours.textContent = hrs < 10 ? "0" + hrs : hrs;
      }
    }
    console.log(min);
  }, 1000);
});
