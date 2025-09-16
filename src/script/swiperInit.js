import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/* eslint-disable no-unused-vars */
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
/* eslint-enable no-unused-vars */
