"use strict"

let subscribeModal = document.getElementById("subscribe-modal");
let modalClose = document.getElementsByClassName("modal__close"); 

window.onload = () => {
    if (document.cookie.includes('modalClose') !== true) {
        subscribeModal.classList.add("modal_active");
    }
}

modalClose[0].onclick = function() {
    document.cookie='modalClose=true';
    subscribeModal.classList.remove("modal_active");
}

