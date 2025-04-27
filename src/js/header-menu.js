window.addEventListener('load', () => {
  const mobMenu = document.querySelector('.mobile-menu');
  const mobMenuBtn = document.querySelector('.mob-menu-btn');
  const menuCloseBtn = document.querySelector('.menu-open-btn');

  if (!mobMenu || !mobMenuBtn || !menuCloseBtn) {
    console.error('Some menu elements are missing');
    return;
  }

  mobMenuBtn.addEventListener('click', () => {
    mobMenu.classList.add('is-open');
  });

  menuCloseBtn.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
  });
});