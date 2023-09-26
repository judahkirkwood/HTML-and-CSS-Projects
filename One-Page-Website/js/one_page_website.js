// Lightbox open
function openLightbox(imageUrl) {
    var lightboxModal = document.getElementById('lightbox-modal');
    var lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageUrl;
    lightboxModal.style.display = 'block';
}

// Lightbox close
function closeLightbox() {
    var lightboxModal = document.getElementById('lightbox-modal');
    lightboxModal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    var photoOverlays = document.querySelectorAll('.photo-overlay');
    for (var i = 0; i < photoOverlays.length; i++) {
        photoOverlays[i].addEventListener('click', function (event) {
            var imageUrl = event.target.previousElementSibling.src;
            openLightbox(imageUrl);
        });
    }
});
