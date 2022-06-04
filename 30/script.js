'use strict';

const speedInput = document.getElementById('speed');
const textH1 = document.getElementById('text');
const text = 'We love programming!';
let idx = 1;
let speed = 300 / speedInput.value;

writeText();

function writeText() {
  textH1.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) idx = 1;
  setTimeout(writeText, speed);
}

speedInput.addEventListener('input', (e) => (speed = 300 / e.target.value));
