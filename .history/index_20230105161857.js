const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");

const miliseconds = document.querySelector(".milis");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

const iconStart = document.querySelector(".start");
const iconStop = document.querySelector(".stop");
const iconReset = document.querySelector(".reset");

const effects = document.querySelector(".effects");

const history = document.querySelector(".history");

let interval;
let milis = (sec = min = hrs = 0);

const elm = (className) => {
  return document.querySelector(className);
}

elm(".btn-start").addEventListener("click", function () {
  elm(".effects").style.display = "block";
  elm(".effects").style.animationPlayState = "running";
  elm(".btnReset").disabled = false;
  elm(".btnReset").classList.add("btn-enabled");
  interval = setInterval(() => {
    const cusTime = (time) => {
      time < 10 ? "0" + time : time
    }
    milis++;
    
    miliseconds.textContent = cusTime(milis) > 99 ? (milis = "0" + 0) : cusTime(milis);
    if (cusTime(milis) === 100) {
      sec++;
      seconds.textContent = cusTime(sec) > 59 ? (sec = "0" + 0) : cusTime(sec);
      if (cusTime(sec) === 60) {
        min++;
        if (cusTime(min) === 60) {
          hrs++;
          hours.textContent = hrs < 10 ? "0" + hrs : hrs;
        }
        minutes.textContent = cusTime(min) > 59 ? (min = "0" + 0) : cusTime(min);
      }
    }
  }, 10);
const replaceClass = () => {
  return iconStart.className.replace("fa-play", "fa-pause")
}
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
  effects.style.animationPlayState = "paused";
  btnStart.disabled = false;
  btnStart.classList.remove("btn-disabled");
  this.disabled = true;
  this.classList.remove("btn-enabled");
  iconStart.className = iconStart.className.replace("fa-pause", "fa-play");
  clearInterval(interval);
});
let index = 1;
btnReset.addEventListener("click", function () {
  let storeValues = [hrs, min, sec, milis];
  effects.style.display = "none";
  miliseconds.textContent = "00";
  seconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";
  btnStart.disabled = false;
  btnStart.classList.remove("btn-disabled");
  btnStop.disabled = true;
  btnStop.classList.remove("btn-enabled");
  iconStart.className = iconStart.className.replace("fa-pause", "fa-play");
  this.disabled = true;
  this.classList.remove("btn-enabled");
  clearInterval(interval);
  milis = sec = min = hrs = 0;

  const template = `<div class="lap">
  <div class="number-lap">
    <p>${index++}</p>
    <span>Lap</span>
  </div>
  <div class="timer-lap">
    <p>${storeValues[0] < 10 ? "0" + storeValues[0] : storeValues[0]}</p>
    <span>:</span>
    <p>${storeValues[1] < 10 ? "0" + storeValues[1] : storeValues[1]}</p>
    <span>:</span>
    <p>${storeValues[2] < 10 ? "0" + storeValues[2] : storeValues[2]}</p>
    <span>.</span>
    <p>${storeValues[3] < 10 ? "0" + storeValues[3] : storeValues[3]}</p>
  </div>
</div>`;
  console.log(index);
  history.insertAdjacentHTML("afterbegin", template);
});
