function modal () {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const images = document.querySelectorAll('.gallery-image');
    const closeSpan = document.getElementsByClassName("close")[0];

    images.forEach((img) => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImage.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    closeSpan.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

module.exports = modal;