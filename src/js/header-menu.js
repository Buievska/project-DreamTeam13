const mobMenu = document.querySelector('.mobile-menu');
const mobMenuBtn = document.querySelector('.mob-menu-btn');
const menuCloseBtn = document.querySelector('.menu-open-btn');

mobMenuBtn.addEventListener('click', () => {
  mobMenu.classList.add('is-open');
});

menuCloseBtn.addEventListener('click', () => {
  mobMenu.classList.remove('is-open');
});