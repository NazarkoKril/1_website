const swiper = new Swiper(".image-slider", {
  

  loop: true,

 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  slidesPerView: 1,
  spaceBetween: 30,

  speed: 1500,

});
