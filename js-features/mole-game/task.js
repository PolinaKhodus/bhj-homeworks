"use strict"

let holes = document.getElementsByClassName("hole");
let deadCounter = document.getElementById("dead");
let lostCounter = document.getElementById("lost");

function func() {
    if (this.className.includes('hole_has-mole') === true) {
        deadCounter.textContent = Number(deadCounter.textContent) + 1;
    }
    else {
        lostCounter.textContent = Number(lostCounter.textContent) + 1;
    }

    if (Number(deadCounter.textContent) === 10){
        deadCounter.textContent = 0;
        lostCounter.textContent = 0;
        alert("Victory!");
    }
    if (Number(lostCounter.textContent) === 5) {
        lostCounter.textContent = 0;
        deadCounter.textContent = 0;
        alert("You loser!");
    }
}

for (let elem of holes) {
	elem.addEventListener('click', func);
}


