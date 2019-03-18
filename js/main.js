'use strict'

var menuBtn = document.querySelector('.main-nav__button');
var navMain = document.querySelector('.main-nav__container');

menuBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      menuBtn.classList.toggle('main-nav__button_active');
      navMain.classList.toggle('main-nav__container_scaled');
  
});

