const slider = document.querySelector('.slider');
const sliderLine = document.querySelectorAll('.slider__line');
const sliderImeg = document.querySelector('.slider__line');

const sliderPrev = document.querySelector('.slider__btn-prev');
const sliderNext = document.querySelector('.slider__btn-next');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

sliderNext.addEventListener('click', nextSlide);
sliderPrev.addEventListener('click', prevSlide);


function nextSlide() {
    sliderCount++;
    console.log(sliderCount);

    rollSlider();
}

function prevSlide() {
    sliderCount--;
    console.log(sliderCount);

    rollSlider(); 
}
// console.log(sliderLine);

function rollSlider() {
   
    sliderLine[0].style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}