'use strict';

const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

fetchUsers();

filter.addEventListener('input', (e) => {
  filterData(e.target.value);
});

function filterData(searchText) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchText.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

async function fetchUsers() {
  const res = await fetch('https://randomuser.me/api?results=20');
  const { results } = await res.json();

  result.innerHTML = '';
  results.forEach((user) => {
    console.log(user);
    const liEl = document.createElement('li');
    listItems.push(liEl);
    liEl.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}" />
     <div class="user-info">
       <h4>${user.name.first} ${user.name.last}</h4>
       <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;
    result.appendChild(liEl);
  });
}
