'use strict';

const progressBar = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    const formData = new FormData(form);
    const request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
    request.upload.onprogress = function(event) {   
        let progress = event.loaded/event.total;
        progressBar.value = progress;

        if (progress === 1) {
            alert('Загрузка завершена.');
        }
    };
    request.send(formData);
    event.preventDefault();
})