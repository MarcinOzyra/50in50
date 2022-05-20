'use strict';

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toggleEl.addEventListener('click', (e) => {
  document.querySelector('html').classList.toggle('dark');
  e.target.innerHTML = e.target.innerHTML == 'Light mode' ? 'Dark mode' : 'Light mode';
});

setTime();

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const dayOfWeek = time.getDay();
  const dayOfMonth = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const hoursForClock = (hours % 12) + minutes / 60;
  const seconds = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${(hoursForClock / 12) * 360}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minutes / 60) * 360}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${(seconds / 60) * 360}deg)`;

  const zero = minutes > 9 ? '' : '0';
  timeEl.innerHTML = hours + ':' + zero + minutes;
  dateEl.innerHTML = `${days[dayOfWeek]}, ${months[month]} <span class="circle">${dayOfMonth}</span>`;
}

setInterval(setTime, 1000);
