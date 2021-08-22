"use strict"

let counter = document.getElementById("clicker__counter");
let cookieImg = document.getElementById("cookie");

cookieImg.onclick = function(){
   counter.textContent = Number(counter.textContent) + 1;

   if (counter.textContent % 2 === 0) {
    decreaseSize();
   }
   else {
    increaseSize();
   }
}

function increaseSize() {
    cookieImg.width *= 1.3;
    cookieImg.height *= 1.3;
};

function decreaseSize() {
    cookieImg.width /= 1.3;
    cookieImg.height /= 1.3;
};