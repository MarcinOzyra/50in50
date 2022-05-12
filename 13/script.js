'use strict';

const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter' && tags.childElementCount > 1) {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    textarea.disabled = true;
    randomSelect();
  }
});

function createTags(input) {
  const arrInput = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  tagsEl.innerHTML = '';
  //https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml-vs-createelement/
  arrInput.forEach((el) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerHTML = el;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
      textarea.disabled = false;
      textarea.focus();
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
