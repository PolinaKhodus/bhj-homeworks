"use strict"

let dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
console.log(dropdownValue);

dropdownValue[0].onclick = dropdownListActive;

function dropdownListActive(){
     
    let dropdownList = document.getElementsByClassName('dropdown__list');

    if (dropdownList[0].classList.contains('dropdown__list_active') === true) {
        dropdownList[0].classList.remove('dropdown__list_active');
    }
    else {
       dropdownList[0].classList.add('dropdown__list_active');
    }
}

let dropdownLink = Array.from(document.getElementsByClassName('dropdown__link'));

for (let link of dropdownLink){   
    link.addEventListener('click', changeValue);
}

function changeValue(e) {
    e.preventDefault();
    dropdownValue[0].textContent = this.textContent;
    let dropdownList = document.getElementsByClassName('dropdown__list');
    dropdownList[0].classList.remove('dropdown__list_active');
}
