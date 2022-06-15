'use strict';

const background = document.getElementById('background');
const password = document.getElementById('password');

const passwordLength = 20;

password.addEventListener('keyup', () => {
  if (password.value.length < passwordLength) background.style.filter = `blur(${passwordLength / password.value.length}px)`;
  else background.style.filter = `blur(0px)`;
});
