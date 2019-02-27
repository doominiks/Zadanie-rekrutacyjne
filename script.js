let number = document.querySelector('.info__number');
let counter = 23;
let time = setInterval(function () {
    if (counter < 0) {
        clearInterval(time);
    } else {
        number.innerHTML = counter;
        counter--;
    }
}, 1000);