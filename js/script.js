'use strict';

// FEATURE CAROUSEL

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 20000,
  smartSpeed: 800,
  animateIn: 'linear',
  animateOut: 'linear',
  responsive: {
    0: {
      items: 1,
    },
    750: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const dotsContainer = document.querySelector('.dots');

let currSlide = 0;
const maxSlide = slides.length - 1;

slides.forEach(function (sl, i) {
  sl.style.transform = `translateX(${100 * i}%)`;
});

const activateDot = function (sl) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${sl}"]`)
    .classList.add(`dots__dot--active`);
};
activateDot(0);

let updateTime = 8000;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );
};

btnRight.addEventListener('click', function () {
  if (currSlide === maxSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
});

btnLeft.addEventListener('click', function () {
  if (currSlide === 0) {
    currSlide = maxSlide;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
});

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slideNum = e.target.dataset.slide;
    currSlide = slideNum;
    goToSlide(currSlide);
    activateDot(currSlide);
  }
});

setInterval(function () {
  if (currSlide === maxSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
}, updateTime);

const copyrightYear = document.querySelector('.copy-right-year');

const now = new Date().getFullYear();
copyrightYear.innerHTML = now;

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.btn-close');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const html = document.querySelector('html');

menuBtn.addEventListener('click', function () {
  mobileNav.classList.add('mobile-nav-active');
  overlay.style.opacity = 1;
  overlay.style.zIndex = 20;
  html.style.overflow = 'hidden';
});

const remover = function () {
  mobileNav.classList.remove('mobile-nav-active');
  overlay.style.opacity = 0;
  overlay.style.zIndex = -1;
  html.style.overflow = 'auto';
};
closeBtn.addEventListener('click', remover);

overlay.addEventListener('click', remover);

// END
