'use strict';

const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseover', () => {
  left.style.width = '70%';
  right.style.width = '30%';
  right.style.left = '70%';
});

left.addEventListener('mouseout', () => {
  left.style.width = '50%';
  right.style.width = '50%';
  right.style.left = '50%';
});

right.addEventListener('mouseover', () => {
  right.style.width = '70%';
  left.style.width = '30%';
  right.style.left = '30%';
});

right.addEventListener('mouseout', () => {
  left.style.width = '50%';
  right.style.width = '50%';
  right.style.left = '50%';
});
