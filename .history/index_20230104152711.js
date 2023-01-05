const btnStart = document.querySelector(".btn-start");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

btnStart.addEventListener("click", function () {
  let number = 1;
  let timer = setInterval(() => {
    let text = number < 10 ? `0${number++}` : `${number++}`;
    seconds.textContent = text;
    if (number >= 60) {
      number = 0;
      seconds.textContent = text;
    }
    
  }, 1000);
});
