'use strict';

const range = document.getElementById('range');
const rangeWidth = range.getBoundingClientRect().width; //300
const rangeMax = range.max; //100
const ratio = rangeWidth / rangeMax;
const sliderThumbWidth = +getComputedStyle(document.documentElement).getPropertyValue('--thumb-width').replace('.', '').replace('rem', '');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;
  label.style.left = `${ratio * value + scale(value, 0, rangeMax, sliderThumbWidth / 2, -(sliderThumbWidth / 2))}px`;
  label.innerText = value;
});

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
