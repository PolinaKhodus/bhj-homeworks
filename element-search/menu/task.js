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

    let activeMenus = document.getElementsByClassName("menu_active");

    for (let menu of activeMenus){
        menu.classList.remove("menu_active");
    }
    menuSub.classList.add("menu_active"); 
}