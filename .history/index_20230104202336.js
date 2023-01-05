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

    seconds.textContent = timer;
    if (timer === 60) {
      min++;
      minutes.textContent = min < 10 ? "0" + min : min;
      
    }
    if(timer > 59){
        sec = 0;
    }
    
  }, 1000);
});
