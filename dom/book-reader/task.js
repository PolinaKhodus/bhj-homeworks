"use strict";

const bookControl = document.querySelector('.book__control_font-size');
const bookContent = document.querySelector('.book__content')
const fontSize = Array.from(document.querySelectorAll('.font-size'));

bookControl.addEventListener('click', (event) => {
    fontSize.forEach(element => {
        element.classList.remove('font-size_active');
        event.preventDefault();
        event.target.classList.add('font-size_active');

        if(event.target.dataset.size == 'small'){
            bookContent.classList.remove('book_fs-big')
            bookContent.classList.add('book_fs-small')
        } 

	else if(event.target.dataset.size == 'big'){
            bookContent.classList.remove('book_fs-small')
            bookContent.classList.add('book_fs-big')
        } 

	else {
            bookContent.classList.remove('book_fs-small')
            bookContent.classList.remove('book_fs-big')
        }
    });
});