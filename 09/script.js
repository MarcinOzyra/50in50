'use strict';

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  //https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/
  btn.textContent = sound;

  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
