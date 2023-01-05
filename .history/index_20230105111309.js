const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-stop");

const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const miliseconds = document.querySelector(".milis");
const iconStart = document.querySelector(".start");
const iconStop = document.querySelector(".stop");
const iconReset = document.querySelector(".reset");
let interval;
let milis = 0;
let sec = 0;
let min = 0;
let hrs = 0;
btnStart.addEventListener("click", function () {
  interval = setInterval(() => {
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

  if (iconStart.className.includes("fa-play")) {
    iconStart.className = iconStart.className.replace("fa-play", "fa-pause");
    this.disabled = true;
    this.classList.add("btn-disabled");
    btnStop.classList.add("btn-enabled");
    btnStop.disabled = false;
  } else {
    iconStart.className = iconStart.className.replace("fa-pause", "fa-play");
  }
});

btnStop.addEventListener("click", function () {
  // localStorage.setItem("timer", interval);

  btnStart.disabled = false;
  btnStart.classList.remove("btn-disabled");
  this.disabled = true;
  this.classList.remove("btn-enabled");
  iconStart.className = iconStart.className.replace("fa-pause", "fa-play");
  clearInterval(interval);
});


