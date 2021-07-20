new Swiper('.slider1', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
});
new Swiper('.slider2', {
  slidesPerView: 3,
  spaceBetween: 35,
  slidesPerGroup: 3,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
      spaceBetween: 5,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 35,
      slidesPerGroup: 3,
    },
  }
});