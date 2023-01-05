const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const miliseconds = document.querySelector(".milis");
const iconStart = document.getElementsByTagName("ico");
console.log(iconStart);
btnStart.addEventListener("click", function () {
  let milis = 0;
  let sec = 0;
  let min = 0;
  let hrs = 0;
  let interval = setInterval(() => {
    milis++;
    let timerMilis = milis < 10 ? "0" + milis : milis;
    miliseconds.textContent = timerMilis > 99 ? (milis = "0" + 0) : timerMilis;
    if (timerMilis === 100) {
      sec++;
      let timer = sec < 10 ? "0" + sec : sec;
      seconds.textContent = timer > 59 ? (sec = "0" + 0) : timer;
      if (timer === 60) {
        min++;
        let timerMin = min < 10 ? "0" + min : min;
        if (min === 60) {
          hrs++;
          hours.textContent = hrs < 10 ? "0" + hrs : hrs;
        }
        minutes.textContent = timerMin > 59 ? (min = "0" + 0) : timerMin;
      }
    }
  }, 10);

  if (btnStart.innerHTML === iconStart) {
    btnStart.innerHTML = iconPause;
    clearInterval(interval);
  }
});
