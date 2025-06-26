document.addEventListener("DOMContentLoaded", () => {
    const contenidoSlides = document.querySelectorAll("#contenido .slide");
    const slidesContainer = document.querySelector("#banner .slides-container");

    contenidoSlides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slidesContainer.appendChild(clone);
    });

    let currentSlide = 0;
    const slides = slidesContainer.children;
    const totalSlides = slides.length;

    function updateSlidePosition() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    document.querySelector(".next").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });
});
