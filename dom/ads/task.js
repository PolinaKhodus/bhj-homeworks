"use strict";

let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

function rotator() {
    if (index === rotatorCase.length - 1) {
        rotatorCase[index].classList.remove('rotator__case_active');
        index = 0;
        rotatorCase[index].classList.add('rotator__case_active');
	} else {
        rotatorCase[index].classList.remove('rotator__case_active');
        rotatorCase[index + 1].classList.add('rotator__case_active');
    } 

    index++;
}

setInterval(rotate, 1000)