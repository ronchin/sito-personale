import Parallax from 'parallax-js';
import LocomotiveScroll from 'locomotive-scroll';
import Swiper, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import { gsap, ScrollTrigger} from "gsap/all";

/*------------------------------
Init Locomotive Scroll
----------------------------*/

 const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.9,
    lerp: 0.1,
    getDirection: true
});


/*------------------------------
Mostra/Nascondi menu allo scroll
----------------------------*/

scroll.on('scroll', (instance) => {
    document.documentElement.setAttribute('data-direction', instance.direction)
});

/*--------------------------
 	Init Parallax.js
-----------------------------*/
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    hoverOnly: true
});

/*--------------------------
Init Swiper.js
-----------------------------*/
Swiper.use([Navigation]);
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
    // when window width is >= 320px
        350: {
        slidesPerView: 1,
        spaceBetween: 80
        },

    // when window width is >= 640px
        1000: {
        slidesPerView: 3,
        spaceBetween: 40
        }
    },  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },  
});