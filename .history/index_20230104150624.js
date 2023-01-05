const btnStart = document.querySelector('.start');
const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')

btnStart.addEventListener('click', function(){
    let number = 1;
    setInterval(() => {
        seconds.textContent = number
    }, 1000);
})