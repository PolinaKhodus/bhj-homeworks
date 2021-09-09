"use strict"

let menuLink = document.getElementsByClassName("menu__link");

for (let link of menuLink){   
	link.addEventListener('click', openLink);
}

function openLink(e) { 
    let menuSub =  this.closest(".menu__item").querySelector(".menu_sub"); 

    if (menuSub !== null) {
        e.preventDefault();
    }

    if (menuSub.classList.contains('menu_active')=== true) {
        menuSub.classList.remove("menu_active");
    }
    else {
        menuSub.classList.add("menu_active"); 
    }
}
   