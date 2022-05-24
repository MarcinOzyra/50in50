'use strict';

// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

const canvas = document.getElementById('canvas');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clear = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorEl.addEventListener('change', () => {
  color = colorEl.value;
});

decrease.addEventListener('click', () => {
  if (Number(sizeEl.innerHTML) > 1) {
    sizeEl.innerHTML -= 1;
    size = sizeEl.innerHTML;
  }
});

increase.addEventListener('click', () => {
  if (Number(sizeEl.innerHTML) < 20) {
    sizeEl.innerHTML = Number(sizeEl.innerHTML) + 1;
    size = sizeEl.innerHTML;
  }
});

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseleave', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mouseenter', (e) => {
  isPressed = e.buttons === 1 ? true : false;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  // ctx.stroke();
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
