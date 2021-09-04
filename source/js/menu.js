const navbar = document.querySelector('.navbar');
const header = document.querySelector('.page-header');
const burger = navbar.querySelector('.navbar__burger');

navbar.classList.remove('navbar--nojs');
header.classList.remove('page-header--nojs');

const switchMenuStatusHolder = () => {
  if (navbar.classList.contains('navbar--closed')) {
    navbar.classList.remove('navbar--closed');
    navbar.classList.add('navbar--opened');
  } else {
    navbar.classList.add('navbar--closed');
    navbar.classList.remove('navbar--opened');
  }
};

burger.addEventListener('click', switchMenuStatusHolder);
