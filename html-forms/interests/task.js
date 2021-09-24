'use strict';

let interestCheck = document.querySelectorAll('input.interest__check');
console.log(interestCheck)

for (let interest of interestCheck) {
    
    interest.addEventListener('click', e => {

        let interestCheckClothest = interest.closest('.interest');
        console.log(interestCheckClothest)
        let interestCheckSelect = interestCheckClothest.querySelectorAll('.interest__check');

        if ( ! interest.closest('.interests_active') && interest.checked === true ||
               interest.closest('.interests_active') && interest.checked === true) {

            for (let item of interestCheckSelect) {
                item.checked = true;
            }

        } else if ( ! interest.closest('.interests_active') && interest.checked === false ||
                      interest.closest('.interests_active') && interest.checked === false) {

            for (let item of interestCheckSelect) {
                item.checked = false;   
            }
        } 
    })
}