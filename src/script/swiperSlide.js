// Provides Carousel functionality using Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css';

function initializeSwiper() {
    return new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });
}

initializeSwiper();
