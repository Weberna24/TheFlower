const menu = document.querySelector('#menu-bar');
const navbarLogo = document.querySelector('.navbar-logo');
const homeEl = document.querySelector('.home-menu');
const navbarEl = document.querySelector('.navbar-menu');
const cover = document.querySelector('.cover');
const body = document.querySelector('body');
const eventSection = document.querySelector('.event-section');

menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    homeEl.classList.toggle('active');
    body.classList.toggle('active');
})

menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    navbarEl.classList.toggle('active');
    body.classList.toggle('active');
})

menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    navbarLogo.classList.toggle('active');
    body.classList.toggle('active');
})

var swiper = new Swiper("#card-content", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
});



var swiper = new Swiper("#menu-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide:true,
    fade: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
      el: "swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1,
      },
      950: {
        slidesPerView: 1,
      },
    }
  });