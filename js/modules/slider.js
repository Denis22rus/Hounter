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