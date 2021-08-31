"use strict"

let modalMain = document.getElementById("modal_main");

modalMain.classList.add("modal_active");

let modalClose = document.getElementsByClassName("modal__close"); 

for (let i = 0; i < modalClose.length; i++){   
	modalClose[i].addEventListener('click', close);
}

function close() {
    let activeModals = document.getElementsByClassName("modal_active");

    if (this.className.includes('show-success')){
        activeModals[0].classList.remove("modal_active");
        let modalSuccess = document.getElementById("modal_success");       
        modalSuccess.classList.add("modal_active");

    }
    else {
        activeModals[0].classList.remove("modal_active");
    }
}
