const sliderContainer = document.querySelector('.slider-container');

const slideRight = document.querySelector('.left-slide');
const slideLeft = document.querySelector('.right-slide');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slidesLength = slideLeft.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

//Add EventLinerter to the buttons
upButton.addEventListener('click', () => changeSlide('down'));
downButton.addEventListener('click', () => changeSlide('up'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up'){
      activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1) {
          activeSlideIndex = 0;
    }
} else if(direction==='down'){
  activeSlideIndex--;
  if (activeSlideIndex < 0){
    activeSlideIndex = slidesLength -1
  }
}
 slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
 }px)`;
 slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
 }px)`;
};

