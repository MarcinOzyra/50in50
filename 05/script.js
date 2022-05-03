'use strict';

const progressLabel = document.querySelector('.progress');
const image = document.querySelector('.image');

let i = 1;
function progress() {
  progressLabel.innerHTML = i + '%';
  if (i < 100) {
    i++;
    //if (i % 10 == 0) image.style.filter = `blur(${10 - i / 10}px)`;
    image.style.filter = `blur(${scale(i, 0, 100, 10, 0)}px)`;
    progressLabel.style.opacity = scale(i, 0, 100, 1, 0);
    setTimeout(progress, 30);
  }
}

progress();

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
