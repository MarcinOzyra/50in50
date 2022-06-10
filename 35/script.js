'use strict';

const imageContainer = document.querySelector('.image-container');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

let currentImg = 0;

let interval = setInterval(() => changeImg(1), 2000);

previousBtn.addEventListener('click', () => {
  changeImg(0);
  resetInterval();
});
nextBtn.addEventListener('click', () => {
  changeImg(1);
  resetInterval();
});

function changeImg(direction) {
  if (currentImg <= 3 && direction === 1) currentImg++;
  else if (currentImg > 0 && direction === 0) currentImg--;

  if (currentImg >= 4) {
    imageContainer.style.transform = `translateX(0)`;
    currentImg = 0;
  }
  imageContainer.style.transform = `translateX(-${currentImg}00%)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => changeImg(1), 2000);
}
