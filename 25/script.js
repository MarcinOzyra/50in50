'use strict';

const nav = document.querySelector('.nav');
const hero = document.querySelector('.hero');

const fixNav = function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  });
};

const options = {
  threshold: 0.9,
};

const observer = new IntersectionObserver(fixNav, options);

observer.observe(hero);
