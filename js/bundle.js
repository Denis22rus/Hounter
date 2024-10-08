/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((module) => {

function burger () {
    const menuIcon = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.menu__body');
    if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        menuIcon.classList.toggle('active');
        menuBody.classList.toggle('active');
        });
    }
}

module.exports = burger;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal () {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const images = document.querySelectorAll('.gallery-image');
    const closeSpan = document.getElementsByClassName("close")[0];

    // Функция открывает модальное окно
    images.forEach((img) => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImage.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    // Закрыть модальное окно при клике на "X"
    closeSpan.onclick = function() {
        modal.style.display = "none";
    }

    // Закрыть модальное окно при клике вне изображения
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

module.exports = modal;

/***/ }),

/***/ "./js/modules/slider-dots.js":
/*!***********************************!*\
  !*** ./js/modules/slider-dots.js ***!
  \***********************************/
/***/ ((module) => {

function sliderDots () {
    console.log('test');

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                dots[i].classList.add('active');
            }
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
}

module.exports = sliderDots;


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider () {
    const featuredCards = [...document.querySelectorAll('.featured__cards')];
    const nxtBtn = [...document.querySelectorAll('.featured-pre')];
    const preBtn = [...document.querySelectorAll('.featured-next')];

    featuredCards.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
    })
}



module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs() {
    // Получаем кнопки
    const tabsBtn = document.querySelectorAll('.featured__btn');
    const TabsItems = document.querySelectorAll('.featured__card');

    // На каждую кнопку вешаем обработчик события клика
    tabsBtn.forEach(onTabClick);

    function onTabClick(item) {
        item.addEventListener('click', function() {
            let currentBtn = item;
            // Получаем значение дата-таба (айдишника), возможно, с разделителем
            let tabIds = currentBtn.getAttribute('data-tab').split(',');

            // Убираем класс актив у всех кнопок
            tabsBtn.forEach(function(btn) {
                btn.classList.remove('_active');
            });

            // Убираем класс актив у всех табов
            TabsItems.forEach(function(tab) {
                tab.classList.remove('_active');
            });

            // Устанавливаем класс актив для текущей кнопки
            currentBtn.classList.add('_active');

            // Показываем каждый таб по его айди
            tabIds.forEach(function(tabId) {
                let currentTab = document.querySelector(tabId.trim());
                if (currentTab) {
                    currentTab.classList.add('_active');
                }
            });
        });
    }
    document.querySelector('.featured__btn').click();
}

module.exports = tabs;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', function () {
    const burger = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");
    const slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
    const sliderDots = __webpack_require__(/*! ./modules/slider-dots */ "./js/modules/slider-dots.js");
    const modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");

    burger();
    slider();
    tabs();
    sliderDots();
    modal();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map