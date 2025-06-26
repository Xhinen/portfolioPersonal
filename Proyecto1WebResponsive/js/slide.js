let currentSlide = 1;
const totalSlides = 4;

function goToSlide(slideNumber) {
    // Reset all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.animation = 'none';
        slide.style.left = '100%';
        slide.style.opacity = '0';
    });
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));

    // Show selected slide
    const targetSlide = document.querySelector(`.slide:nth-child(${slideNumber})`);
    targetSlide.style.left = '0';
    targetSlide.style.opacity = '1';
    document.querySelector(`.dot:nth-child(${slideNumber})`).classList.add('active');

    currentSlide = slideNumber;

    // Restart animation after a brief delay
    setTimeout(() => {
        document.querySelectorAll('.slide').forEach((slide, index) => {
            slide.style.animation = `slideShow 16s infinite ${index * 4}s`;
        });
    }, 50);
}

function nextSlide() {
    currentSlide = currentSlide < totalSlides ? currentSlide + 1 : 1;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = currentSlide > 1 ? currentSlide - 1 : totalSlides;
    goToSlide(currentSlide);
}

// Set first dot as active on page load
document.querySelector('.dot:nth-child(1)').classList.add('active');