'use strict';

const labels = document.querySelectorAll('label');
/*
for (let i = 0; i < labels.length; i++) {
  let labelInnerHTML = '';
  for (let j = 0; j < labels[i].innerHTML.length; j++) {
    labelInnerHTML += `<span style="transition-delay: ${j * 50}ms">${labels[i].innerHTML[j]}</span>`;
    //labelInnerHTML += `<span>${labels[i].innerHTML[j]}</span>`;
  }
  labels[i].innerHTML = labelInnerHTML;
}
*/
//--------------------------------------
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, inx) => `<span style="transition-delay: ${inx * 50}ms">${letter}</span>`)
    .join('');
});
