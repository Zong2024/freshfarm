import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function initSwipers() {
  const swiper = new Swiper(".swiper", {
    modules: [Pagination],
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const swiper2 = new Swiper(".swiper2", {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
    slidesPerView: 1.5,
    spaceBetween: 24,
    breakpoints: {
      960: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}
