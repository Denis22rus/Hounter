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