'use strict';

const loveMeEl = document.querySelector('.loveme');
const timesEl = document.querySelector('#times');

let previous = 0;
loveMeEl.addEventListener('click', (e) => {
  if (previous === 0) previous = new Date().getTime();
  else {
    if (new Date().getTime() - previous < 800) {
      createHeart(e);
      previous = 0;
    } else previous = new Date().getTime();
  }
});

function createHeart(e) {
  const heartEl = document.createElement('i');
  heartEl.classList.add('fas');
  heartEl.classList.add('fa-heart');
  heartEl.style.top = e.offsetY + 'px';
  heartEl.style.left = e.offsetX + 'px';
  loveMeEl.appendChild(heartEl);
  timesEl.textContent = ++timesEl.textContent;
  setTimeout(() => heartEl.remove(), 1000);
}
