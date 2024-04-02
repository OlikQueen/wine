export function setupCounter() {
    const slider = document.querySelector("[data-slider]");
    const sliderImages = document.querySelectorAll("[data-slider-img]");
    const sliderLine = document.querySelector("[data-slider-line]");

    const sliderBtnNext = document.querySelector("[data-slider-btn-next]");
    const sliderBtnPrev = document.querySelector("[data-slider-btn-prev]");

    let sliderCount = 0;
    let sliderWidth = slider.offsetWidth;

    //перемотка вперёд по нажатию на кнопку
    sliderBtnNext.addEventListener('click', nextSlide);
    //перемотка назад по нажатию на кнопку
    sliderBtnPrev.addEventListener('click', prevSlide);


    function nextSlide() {
        sliderCount++;

        if (sliderCount >= sliderImages.length) {
            sliderCount = 0;
        }
        rollSlider();
    }

    function prevSlide() {
        sliderCount--;

        if (sliderCount < 0) {
            sliderCount = sliderImages.length - 1;
        }

        rollSlider();
    }

    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }

    setInterval(() => {
        nextSlide()
    }, 3000);
}