/* eslint-disable linebreak-style */
const mobileMenuIcon = document.querySelector('#humber-icon');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close-btn');

mobileMenuIcon.addEventListener('click', (e) => {
  e.preventDefault();
  mobileMenu.style.display = 'flex';
});

mobileMenuClose.addEventListener('click', (e) => {
  e.preventDefault();
  mobileMenu.style.display = 'none';
});
