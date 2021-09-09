"use strict"

let sliderPrev = document.getElementsByClassName("slider__arrow_prev");
let sliderNext = document.getElementsByClassName("slider__arrow_next");

sliderPrev[0].onclick = slider_Prev;
sliderNext[0].onclick = slider_Next;

let sliderItem = document.getElementsByClassName("slider__item");
let countItem = sliderItem.length - 1;

function slider_Next() {
    let indexActiveElement = getIndexActiveElement();
    let activeElement = document.getElementsByClassName("slider__item_active")[0];

    if (indexActiveElement === (countItem)) {
        activeElement.classList.remove("slider__item_active");
        sliderItem[0].classList.add("slider__item_active"); 
    }
    else {
        activeElement.classList.remove("slider__item_active");
        sliderItem[indexActiveElement + 1].classList.add("slider__item_active");
    }
}

function slider_Prev() {
    let indexActiveElement = getIndexActiveElement();
    let activeElement = document.getElementsByClassName("slider__item_active")[0];

    if (indexActiveElement === 0) {
        activeElement.classList.remove("slider__item_active");
        sliderItem[countItem].classList.add("slider__item_active"); 
    }
    else {
        activeElement.classList.remove("slider__item_active");
        sliderItem[indexActiveElement - 1].classList.add("slider__item_active");
    }
}

function getIndexActiveElement() {
    let activeSlid = document.getElementsByClassName("slider__item_active");
    
        sliderItem = Array.from(sliderItem);
        activeSlid = Array.from(activeSlid);
    
   return sliderItem.indexOf(activeSlid[0]);
}
