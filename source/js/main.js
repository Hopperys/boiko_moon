'use strict';

if (document.contains(document.querySelector('nav'))) {
  var navbarList = document.querySelector('.navbar ul');

  navbarList.addEventListener('click', function (evt) {
    evt.preventDefault();
    var blockId = evt.target.getAttribute('href');

    document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  var navbar = document.querySelector('.navbar');
  var header = document.querySelector('.page-header');
  var burger = navbar.querySelector('.navbar__burger');

  navbar.classList.remove('navbar--nojs');
  header.classList.remove('page-header--nojs');

  burger.addEventListener('click', function () {
    if (navbar.classList.contains('navbar--closed')) {
      navbar.classList.remove('navbar--closed');
      navbar.classList.add('navbar--opened');
    } else {
      navbar.classList.add('navbar--closed');
      navbar.classList.remove('navbar--opened');
    }
  });
}

if (document.contains(document.querySelector('form'))) {
  var information = document.querySelector('.information');
  var form = information.querySelector('form');
  var phoneInput = form.querySelector('#phone');
  var nameInput = form.querySelector('#name');

  var validity = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  var isStorageSupport = true;
  var storage = {};

  try {
    storage.name = localStorage.getItem('name');
    storage.phone = localStorage.getItem('phone');
  } catch (err) {
    isStorageSupport = false;
  }

  window.addEventListener('load', function () {
    if (storage) {
      phoneInput.value = storage.phone;
      nameInput.value = storage.name;
    }
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (!validity.test(phoneInput.value)) {
      phoneInput.classList.add('information__error');
    }

    if (isStorageSupport) {
      localStorage.setItem('name', nameInput.value);
      localStorage.setItem('phone', phoneInput.value);
    }

    if (validity.test(phoneInput.value) && nameInput.value !== '') {
      phoneInput.classList.remove('information__error');
      form.submit();
    }
  });

}
