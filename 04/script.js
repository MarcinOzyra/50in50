'use strict';

const input = document.querySelector('.input');
const sectionSearch = document.querySelector('.section__search');

sectionSearch.addEventListener('click', () => {
  sectionSearch.classList.toggle('show');
  input.focus();
});
