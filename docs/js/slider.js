document.addEventListener("DOMContentLoaded", () => {
    const contenidoSlides = document.querySelectorAll(".contenido .slide");
    const slidesContainer = document.querySelector("#banner .slides-container");
    const dotsContainer = document.querySelector(".slider-dots");

    // Clonar slides y generar dots(puntos)
    contenidoSlides.forEach((slide, index) => {
        const clone = slide.cloneNode(true);
        clone.classList.add("banner-slide");
        slidesContainer.appendChild(clone);

        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    const slides = slidesContainer.children;
    const dots = dotsContainer.children;
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slideInterval;

    function updateSlidePosition() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        Array.from(dots).forEach(dot => dot.classList.remove("active"));
        dots[currentSlide].classList.add("active");
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlidePosition();
        resetInterval();
    }

    document.querySelector(".next").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
        resetInterval();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
        resetInterval();
    });

    Array.from(dots).forEach(dot => {
        dot.addEventListener("click", () => {
            goToSlide(parseInt(dot.dataset.index));
        });
    });

    function startAutoplay() {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlidePosition();
        }, 10000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startAutoplay();
    }

    startAutoplay();
});
