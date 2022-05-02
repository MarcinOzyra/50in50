'use strict';

const btnClose = document.getElementById('close');
const btnOpen = document.getElementById('open');
const section = document.querySelector('section');

btnOpen.addEventListener('click', () => {
  section.classList.add('show-nav');
});

btnClose.addEventListener('click', () => {
  section.classList.remove('show-nav');
});
