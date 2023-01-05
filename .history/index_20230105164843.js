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
};

const replaceClass = (classOld, classNew) => {
  return elm(".start").className.replace(classOld, classNew);
};

const cusTime = (time) => {
  return time < 10 ? "0" + time : time;
};

elm(".btn-start").addEventListener("click", function () {
  elm(".effects").style.display = "block";
  elm(".effects").style.animationPlayState = "running";
  elm(".btn-reset").disabled = false;
  elm(".btn-reset").classList.add("btn-enabled");
  interval = setInterval(() => {
    milis++;
    elm(".milis").textContent =
      cusTime(milis) > 99 ? (milis = 0) : cusTime(milis);
console.log(cusTime(milis))
    if (cusTime(milis) === 100) {
      console.log(sec);
      sec++;
      elm(".seconds").textContent =
        cusTime(sec) > 59 ? (sec = "0" + 0) : cusTime(sec);
      if (cusTime(sec) === 60) {
        min++;
        if (cusTime(min) === 60) {
          hrs++;
          elm(".hours").textContent = hrs < 10 ? "0" + hrs : hrs;
        }
        elm(".minutes").textContent =
          cusTime(min) > 59 ? (min = "0" + 0) : cusTime(min);
      }
    }
  }, 10);

  if (elm(".start").className.includes("fa-play")) {
    elm(".start").className = replaceClass("fa-play", "fa-pause");
    this.disabled = true;
    this.classList.add("btn-disabled");
    elm(".btn-stop").classList.add("btn-enabled");
    elm(".btn-stop").disabled = false;
  } else {
    elm(".start").className = replaceClass("fa-pause", "fa-play");
  }
});

elm(".btn-stop").addEventListener("click", function () {
  elm(".effects").style.animationPlayState = "paused";
  elm(".btn-start").disabled = false;
  elm(".btn-start").classList.remove("btn-disabled");
  this.disabled = true;
  this.classList.remove("btn-enabled");
  elm(".start").className = replaceClass("fa-pause", "fa-play");
  clearInterval(interval);
});

let index = 1;
elm(".btn-reset").addEventListener("click", function () {
  let storeValues = [hrs, min, sec, milis];
  elm(".effects").style.display = "none";
  elm(".milis").textContent = "00";
  elm(".seconds").textContent = "00";
  elm(".minutes").textContent = "00";
  elm(".hours").textContent = "00";
  elm(".btn-start").disabled = false;
  elm(".btn-start").classList.remove("btn-disabled");
  elm(".btn-stop").disabled = true;
  elm(".btn-stop").classList.remove("btn-enabled");
  elm(".start").className = replaceClass("fa-pause", "fa-play");
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
  history.insertAdjacentHTML("afterbegin", template);
});
