// Swiper JS
var swiper = new Swiper(".swiper", {
  // Parâmetros principais
  loop: true,

  // bolinhas em baixo
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // SETAS para Navegação
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

//GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
});


