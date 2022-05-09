'use strict';

const btn = document.getElementById('jokeBtn');
const jokeContent = document.getElementById('joke');

btn.addEventListener('click', getJoke);

async function getJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const joke = await response.json();
  jokeContent.innerHTML = joke.joke;
}
