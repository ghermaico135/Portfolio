/* eslint-disable linebreak-style */
<<<<<<< HEAD
// const mobileMenuIcon = document.querySelector('#humber-icon');
// const mobileMenu = document.querySelector('#mobile-menu');
// const mobileMenuClose = document.querySelector('.mobile-menu-close-btn');
=======
const mobileMenuIcon = document.querySelector('#humber-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLink = document.querySelectorAll('.menu-link');
const mobileMenuClose = document.querySelector('.mobile-menu-close-btn');
>>>>>>> main

// mobileMenuIcon.addEventListener('click', (e) => {
//   e.preventDefault();
//   mobileMenu.style.display = 'flex';
// });

<<<<<<< HEAD
// mobileMenuClose.addEventListener('click', (e) => {
//   e.preventDefault();
//   mobileMenu.style.display = 'none';
// });
=======
mobileMenuClose.addEventListener('click', (e) => {
  e.preventDefault();
  mobileMenu.style.display = 'none';
});

menuLink.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});
>>>>>>> main
