'use strict';

const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const buttonUp = document.querySelector('.up-button');
const buttonDown = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

buttonUp.addEventListener('click', () => changeSlide('up'));
buttonDown.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
  }

  if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) activeSlideIndex = 3;
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
}