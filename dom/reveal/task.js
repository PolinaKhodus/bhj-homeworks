"use strict"

window.onload = () => {
    
    window.addEventListener('scroll', function() {
        let reveals = document.getElementsByClassName('reveal');

        for (let element of reveals) {
            let position = element.getBoundingClientRect();

            if (position.top > 0 && position.top < window.innerHeight) {
                element.classList.add('reveal_active');
            }   
        }   
    })
}
