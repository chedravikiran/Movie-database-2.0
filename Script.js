




var swiper = new Swiper(".popular-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev", // Fixed the typo here
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});










// Select the first play button and close button
let playButton = document.getElementById('play-movie');
let closebtn = document.getElementById('close-video');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let playContainer = document.querySelector('.play-container');
// Play button onclick


 showVideo= function(){
   console.log('hii')
  video.classList.add('showvideo');
  myvideo.play();
  console.log('hii')
};

// Close button onclick



closeVideo=function (){
  video.classList.remove('showvideo');
  myvideo.pause();
};

