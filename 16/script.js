'use strict';

const glasses = document.querySelectorAll('.glass');
const vessel = document.querySelector('.vessel');
const water = document.querySelector('.water');
const liters = document.querySelector('.liters');
const remained = document.querySelector('.remained');

water.innerHTML = '';
let percentage = 100 / glasses.length;

for (let i = 0; i < glasses.length; i++) {
  glasses[i].addEventListener('click', () => {
    fillGlasses(i);
  });
}

function fillGlasses(number) {
  // if (glasses[number].classList.contains('full') && number == glasses.length - 1) number--;
  // else if (glasses[number].classList.contains('full') && !glasses[number].nextElementSibling.classList.contains('full')) number--;

  if (glasses[number].classList.contains('full') && !glasses[number].nextElementSibling?.classList.contains('full')) number--;

  for (let i = 0; i < glasses.length; i++) {
    glasses[i].classList.remove('full');
  }
  for (let i = 0; i <= number; i++) {
    glasses[i].classList.toggle('full');
  }
  if (number < glasses.length - 1) remained.innerHTML = 'Remained';
  updateVessel();
}

function updateVessel() {
  let numberOfFull = document.querySelectorAll('.glass.full').length;
  // glasses.forEach((glass) => {
  //   if (glass.classList.contains('full')) numberOfFull++;
  // });
  water.style.height = `${numberOfFull * 37.5}px`;
  water.innerHTML = numberOfFull * percentage + '%';
  vessel.style.height = `${300 - numberOfFull * 37.5}px`;
  liters.innerHTML = `${(2000 - numberOfFull * 250) / 1000}L`;
  if (numberOfFull == glasses.length) {
    remained.innerHTML = '';
    liters.innerHTML = '';
  }
}
