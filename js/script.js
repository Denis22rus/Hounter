window.addEventListener('DOMContentLoaded', function () {
    const burger = require('./modules/burger');
    const slider = require('./modules/slider');
    const tabs = require('./modules/tabs');
    const sliderDots = require('./modules/slider-dots');
    const modal = require('./modules/modal');

    burger();
    slider();
    tabs();
    sliderDots();
    modal();
});