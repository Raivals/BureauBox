let currentIndex = 0;
const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');

function slideRight() {
    const slideWidth = slides[0].offsetWidth + 20; // + margins
    const maxIndex = slides.length - getSlidesPerView();
    if (currentIndex < maxIndex) {
        currentIndex++;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
}

function slideLeft() {
    const slideWidth = slides[0].offsetWidth + 20;
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
}

function getSlidesPerView() {
    const width = window.innerWidth;
    if (width < 600) return 1;
    if (width < 1024) return 2;
    return 3;
}

window.addEventListener('resize', () => {
    const slideWidth = slides[0].offsetWidth + 20;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});