'use strict';

const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const progressLine = document.getElementById('progress__line');
const circleAll = document.querySelectorAll('div.progress__circle');

//progressLine.style.width = '50%';
let progress = 1;
let progressLineWidth = 0;

btnNext.addEventListener('click', () => {
  changeProgress(1);
});

btnPrev.addEventListener('click', () => {
  changeProgress(0);
});

function changeProgress(direction) {
  if (progress < 4 && direction) {
    progress++;
    progressLineWidth += 33;
    circleAll[progress - 1].classList.add('progress__circle--active');
    if (progress > 1) btnPrev.disabled = false;
  } else if (progress > 1 && !direction) {
    progress--;
    progressLineWidth -= 33;
    circleAll[progress].classList.remove('progress__circle--active');
    if (progress < 4) btnNext.disabled = false;
  }
  if (progress == 4) btnNext.disabled = true;
  if (progress == 1) btnPrev.disabled = true;
  progressLine.style.width = `${progressLineWidth}%`;
}
