import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

import '/scss/style.scss';



// init Swiper:
var swiper = new Swiper(".mySwiper", {
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  spaceBetween: 15,
  // using "ratio" endpoints
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 45,
    },
  }

});

swiper.on('slideChange', function () {
  console.log('slide changed');
});

export default swiper
