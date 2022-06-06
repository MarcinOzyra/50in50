'use strict';

const resultEl = document.getElementById('result');
const clipboardBtn = document.getElementById('clipboard');
const lengthEl = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');

const arrSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', ',', '.'];

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function getRandomSymbol() {
  return arrSymbols[Math.floor(Math.random() * arrSymbols.length)];
}

generateBtn.addEventListener('click', () => {
  const checkboxes = uppercaseCheckbox.checked || lowercaseCheckbox.checked || numbersCheckbox.checked || symbolsCheckbox.checked;
  resultEl.innerText = '';
  if (checkboxes) generatePassword();
});

function generatePassword() {
  let i = 0;
  const passwordLength = +lengthEl.value;
  while (i < passwordLength) {
    if (uppercaseCheckbox.checked) {
      resultEl.innerText += getRandomUpper();
      i++;
      if (i >= passwordLength) break;
    }
    if (lowercaseCheckbox.checked) {
      resultEl.innerText += getRandomLower();
      i++;
      if (i >= passwordLength) break;
    }
    if (numbersCheckbox.checked) {
      resultEl.innerText += getRandomNumber();
      i++;
      if (i >= passwordLength) break;
    }
    if (symbolsCheckbox.checked) {
      resultEl.innerText += getRandomSymbol();
      i++;
      if (i >= passwordLength) break;
    }
  }
}

clipboardBtn.addEventListener('click', async () => {
  await navigator.clipboard.writeText(resultEl.innerText);
});

//https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
const array = new Uint32Array(5);
self.crypto.getRandomValues(array);
for (const num of array) {
  // console.log(num);
}

function getRandomInt(min, max) {
  // Create byte array and fill with 1 random number
  const byteArray = new Uint8Array(1);
  window.crypto.getRandomValues(byteArray);
  const range = max - min + 1;
  const max_range = 256;
  if (byteArray[0] >= Math.floor(max_range / range) * range) return getRandomInt(min, max);
  return min + (byteArray[0] % range);
}

// console.log(getRandomInt(1, 10));
