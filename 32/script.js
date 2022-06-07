'use strict';

const goodEl = document.getElementById('good');
const cheapEl = document.getElementById('cheap');
const fastEl = document.getElementById('fast');

goodEl.addEventListener('click', (e) => {
  if (cheapEl.checked && fastEl.checked) fastEl.checked = false;
  console.log(e.target);
});

cheapEl.addEventListener('click', () => {
  if (goodEl.checked && fastEl.checked) goodEl.checked = false;
});

fastEl.addEventListener('click', () => {
  if (goodEl.checked && cheapEl.checked) cheapEl.checked = false;
});

//good, fast
//cheap, fast
//cheap, good
