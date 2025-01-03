
const swiper = new Swiper('.swiper-container', {
    loop:false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: false,
    },
    navigation: {
      nextEl: '.swiper-button-nextN',
      prevEl: '.swiper-button-prevP', 
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  console.log("Swiper Details:",swiper);
  
  