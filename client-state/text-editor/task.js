"use strict"

let editor = document.getElementById('editor');
let button = document.querySelector('.button');

editor.oninput = () => {
    let editorText = editor.value;
    localStorage.setItem('value', editorText);
}

window.onload = () => {
    editor.value = localStorage.getItem('value');
}

button.addEventListener('click', () => {
    localStorage.removeItem('value');
    editor.value = "";
})