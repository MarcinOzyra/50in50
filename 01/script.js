'use strict';

const zd = document.querySelectorAll('[class^="panel__"]');

for (let i = 0; i < zd.length; i++) {
  zd[i].addEventListener('click', () => {
    for (const item of zd) {
      if (item.classList.contains('active')) item.classList.remove('active');
    }
    zd[i].classList.add('active');
  });
}
