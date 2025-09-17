// Provides Carousel functionality using Swiper
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export function initializeSwiper() {
    return new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,

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
