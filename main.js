
const box = document.getElementById('box');
const flyImg = document.getElementById('boxImg');
const imgWidth = 24;
const imgHeight = 24;
const FLY_DELAY = 600;

let timeId = setInterval(moveFly, FLY_DELAY);

box.addEventListener('mouseover', () => clearInterval(timeId));
box.addEventListener('mouseout', () => {timeId = setInterval(moveFly, FLY_DELAY)});

flyImg.addEventListener('mouseout', moveFly);

function randomPosition(lower, upper) {
    return Math.floor(Math.random() * upper) + 'px';
}

function moveFly() {
    flyImg.style.left = randomPosition(0, 380 - imgWidth);
    flyImg.style.top = randomPosition(0, 180 - imgHeight);
    return;
}

