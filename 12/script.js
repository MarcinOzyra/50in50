'use strict';

// const closeIcon = document.querySelectorAll('.fa-times');
// const showIcon = document.querySelectorAll('.fa-chevron-down');
// const faq = document.querySelectorAll('.faq');
const btns = document.querySelectorAll('.faq__toggle');

console.log(concatenate('ala', ' ma kota'));

btns.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});

// for (let i = 0; i < btns.length; i++) {
//   closeIcon[i].style.display = 'none';
//   showIcon[i].style.display = 'block';
//   btns[i].addEventListener('click', () => {
//     closeIcon[i].style.display = closeIcon[i].style.display == 'none' ? 'block' : 'none';
//     showIcon[i].style.display = showIcon[i].style.display == 'block' ? 'none' : 'block';
//     faq[i].classList.toggle('active');
//   });
// }

// document.querySelector('.faq-container').addEventListener('click', ({ target }) => {
//   target.parentElement.parentElement.classList.toggle('active');
// });

/*
//event delegation solution
const faqContainer = document.querySelector('.faq-container')
 
faqContainer.addEventListener('click', function toggleFaq (e) {
  if (e.target.matches('.faq-toggle')) {
    const faqBox = e.target.parentElement
    faqBox.classList.toggle('active')
  }
})

//CSS
// in order to click directly on <button>
.fa-chevron-down,
.fa-times {
  pointer-events: none;
}
*/
