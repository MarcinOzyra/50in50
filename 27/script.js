'use strict';

const btn = document.getElementById('button');
const toasts = document.querySelector('.toasts');

const messages = ['Message One', 'Message Two', 'Some Message', 'And some other Message'];

btn.addEventListener('click', () => createNotification('success'));

function createNotification(type) {
  const newDiv = document.createElement('div');
  newDiv.innerText = getRandomMessage();
  newDiv.classList.add('toast');
  newDiv.classList.add(type ? type : 'info');
  toasts.appendChild(newDiv);

  setTimeout(() => {
    newDiv.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
