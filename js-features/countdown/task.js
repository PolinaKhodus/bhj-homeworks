"use strict"

let intervalID;

function decreaseTimer(){
    let timer = document.getElementById("timer");
    timer.textContent -= 1;

    if (Number(timer.textContent) === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalID);
    }
}

intervalID = setInterval(decreaseTimer,1000);


