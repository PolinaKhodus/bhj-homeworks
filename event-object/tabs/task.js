"use strict"

let tab = Array.from(document.getElementsByClassName('tab'));
let tabContent = Array.from(document.getElementsByClassName('tab__content'));

for (let link of tab) {
	link.addEventListener('click', tabLink);
}

function tabLink(){
    let index = tab.indexOf(this);

    for ( let i = 0; i < tab.length; i++) {
        if (tab[i].classList.contains('tab_active')=== true && tabContent[i].classList.contains('tab__content_active') === true) {
            tab[i].classList.remove('tab_active');
            tabContent[i].classList.remove('tab__content_active');
        }
    }

    tab[index].classList.add('tab_active');
    tabContent[index].classList.add('tab__content_active');

}