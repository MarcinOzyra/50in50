'use strict';

const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 20;
const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#f5f5f5',
  fighting: '#e6e0d4',
  normal: '#f5f5f5',
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

function createPokemonCard(data) {
  const { id, name, types, sprites } = data;
  const number = id.toString();
  const type = types[0].type.name;

  const cardEl = document.createElement('div');
  cardEl.classList.add('pokemon');
  cardEl.style.backgroundColor = colors[type];
  cardEl.innerHTML = `
  <div class="img-container">
    <img src="${sprites.other.home.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">#${number.padStart(3, '0')}</span>
    <h3 class="name">${name[0].toUpperCase() + name.slice(1)}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `;
  pokeContainer.appendChild(cardEl);
}

fetchPokemons();
