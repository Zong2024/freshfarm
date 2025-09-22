import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import { initSwipers } from "./assets/js/swiper";
initSwipers();

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 400,
    easing: 'ease-in-sine',
});

import { initStickyHeader } from './assets/js/animations';
initStickyHeader('#nav');