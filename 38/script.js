'use strict';

const imgs = document.querySelectorAll('.content');
const navItems = document.querySelectorAll('nav ul li');

navItems.forEach((navItem, i) => {
  navItem.addEventListener('click', (e) => {
    change(i);
  });
});

function change(i) {
  navItems.forEach((navItem) => {
    navItem.classList.remove('active');
  });
  navItems[i].classList.add('active');

  imgs.forEach((img) => {
    img.classList.remove('show');
  });
  imgs[i].classList.add('show');
}
