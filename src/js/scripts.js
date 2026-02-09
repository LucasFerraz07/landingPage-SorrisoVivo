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

gsap.from(".imgDoutor", {
  opacity: 0,
  x: -60,
  duration: 1.5,
  scrollTrigger: {
    markers: false,
    trigger: ".imgDoutor",
    start: "10% 50%",
    end: "100% 0%",
  },
});

gsap.from(".formacao h3", {
  opacity: 0,
  y: -30,
  scrollTrigger: {
    markers: false,
    trigger: ".formacao h3",
    start: "0% 85%",
    scrub: true,
  },
});

// Animação do SVG - Desenho
const divisorPaths = document.querySelectorAll(".divisorSvg path");
divisorPaths.forEach((path) => {
  // Animar apenas paths com stroke (linhas)
  if (path.getAttribute("stroke")) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: ".divisorSvg",
        start: "0% 90%",
        scrub: true, 
        markers: false,
      },
    });
  } else {
    // Animar opacidade dos paths preenchidos (dente)
    path.style.opacity = 0;
    gsap.to(path, {
      opacity: 1,
      scrollTrigger: {
        trigger: ".divisorSvg",
        start: "0% 70%",
        markers: false,
        scrub: true,
      },
    });
  }
});

//ANIMAÇÃO DE TEXTO - SplitText
const grupoSplit = document.querySelectorAll(".textoSplit");

//Animar de  forma independente para cada elemento
grupoSplit.forEach((element) => {
  const split = SplitText.create(element, {
    type: "lines, words",
    mask: "words",
  });

  gsap.from(split.words, {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    scrollTrigger: {
      trigger: element,
    },
  });
});


