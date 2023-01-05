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

    seconds.textContent = timer > 11 ? (sec = "0" + 0) : timer;
    if (timer === 16) {
      min++;
      minutes.textContent =
        min < 10 ? "0" + min : min > 10 ? (min = "0" + 0) : "0" + 0;
    }
    if (min === 11) {
      hrs++;
      hours.textContent = hrs < 10 ? "0" + hrs : hrs;
    }
  }, 1000);
});
