'use strict';

const API_URL = 'https://api.github.com/users/';

const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');
const mainEl = document.querySelector('.main');

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
  } catch (err) {
    if (err.response.status === 404) createErrCard('No profile with this username');
  }
}

async function getRipos(username) {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    console.log(err);
    createErrCard('Problem fetching repos');
  }
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = searchEl.value;
  if (user) {
    getUser(user);
    getRipos(user);
    searchEl.value = '';
  }
});

function createUserCard(user) {
  const { login, followers, following, public_repos, bio, avatar_url } = user;
  const cardHTML = `<div class="card">
  <div>
    <img src="${avatar_url}" alt="${login}" class="avatar" />
  </div>
  <div class="user-info">
    <h2>${login}</h2>
    <p>${bio || 'No bio'}</p>
    <ul>
      <li>${followers} <strong>Followers</strong></li>
      <li>${following} <strong>Following</strong></li>
      <li>${public_repos} <strong>Repos</strong></li>
    </ul>
    <div class="repos">
    </div>
  </div>
</div>`;
  mainEl.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.querySelector('.repos');
  let reposHTML = '';
  repos.slice(0, 10).forEach((repo) => {
    reposHTML += `<a href="${repo.html_url}" class="repo" target="_blank">${repo.name}</a>`;
  });
  reposEl.innerHTML = reposHTML;
}

function createErrCard(message) {
  const cardHTML = `<div class="card"><div class="user-info"><h1>${message}</h1></div></div>`;
  mainEl.innerHTML = cardHTML;
}
