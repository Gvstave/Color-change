document.addEventListener('DOMContentLoaded', () => {
    var sound = new Audio('sound.mp3');
const body = document.getElementById('body');
const state = document.getElementById('state');

let isPlaying = false;
let intervalId = null;

state.textContent = 'Play';

state.addEventListener('click', function () {
    if (!isPlaying) {
        isPlaying = true;
        state.textContent = 'Stop';
        play()
        intervalId = setInterval(play, 2000);
    } else {
        isPlaying = false;
        state.textContent = 'Play';
        stop();
        clearInterval(intervalId);
    }
});

function play() {
    sound.play();
    body.style.background = `linear-gradient(270deg, ${leftColor()}, ${rightColor()})`;
}

function stop() {
    sound.pause();
    sound.currentTime = 0;
    body.style.background = 'black';
}

function leftColor() {
    return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function rightColor() {
    return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function randomColor() {
    return Math.floor(Math.random() * 256);
}

})