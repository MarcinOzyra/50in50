'use strict';

const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const numberOfSquares = 506;

for (let i = 0; i < numberOfSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseout', () => {
    removeColor(square);
  });
  container.appendChild(square);
}

function setColor(element) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  element.style.backgroundColor = randomColor;
  element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}
