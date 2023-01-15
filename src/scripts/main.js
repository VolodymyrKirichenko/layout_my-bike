'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;
  let isReady = false;

  document.querySelectorAll('.page__section').forEach((el, i) => {
    if (el.offsetTop - document.querySelector('.page__section')
      .clientHeight <= scrollDistance) {
      document.querySelectorAll('.page__main .container').forEach((eli) => {
        if (eli.classList.contains('animation')) {
          eli.classList.remove('animation');
          isReady = false;
        }
      });

      if (!isReady) {
        document.querySelectorAll('.page__section')[i]
          .querySelector('div.container').classList.add('animation');
      }
    }
  });
});
