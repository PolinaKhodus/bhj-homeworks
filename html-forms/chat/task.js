'use strict';

let chatBotMessages = [
    'Добрый день! Не пишите нам',
    'Здравствуйте, мы ещё не проснулись. Позвоните через 10 лет.',
    'Какой Вы, однако, наглый.',
    'Не говорите мне что делать, я не скажу, куда вам идти',
    '... )',
    'Спасибо за ваш вопрос! Мы обязательно не ответим на него',
    'Чё нада?',
    'Хватит сюда писать. Нет никого.',
    'Оставлю без комментариев.',
    'Ну что ещё-то? Идите, идите уже, уважаемый.',
    'Перерыв 15 минут'
]

let chatBotMessagesWaitingAReply = [
    'Вы там живы?',
    'Аллё, есть там кто-нибудь?',
    'Уважаемый?',
    'Ку-ку? Там кто-нибудь есть?',
    'Тук-тук? Меня слышно?',
    'Чего молчишь-то?'
]

let dateHoursMinutes = null;
let chatWidget = document.querySelector(".chat-widget");
let chatWidgetSide = document.querySelector(".chat-widget__side");
let chatWidgetInput= document.querySelector(".chat-widget__input"); 
let chatWidgetMessages = document.querySelector(".chat-widget__messages");
let messageTime = document.querySelectorAll(".message__time");
let chatWidgetMessagesContainer = document.querySelector(".chat-widget__messages-container");

function clickChat() {
    chatWidget.classList.toggle('chat-widget_active');
}

chatWidgetSide.addEventListener('click', clickChat);

function getRealDate() {
    const date = new Date();

    let dateHours = date.getHours();
    if (dateHours < 10) {
        dateHours = `0${dateHours}`;
    }

    let dateMinutes = date.getMinutes();
    if (dateMinutes < 10) {
        dateMinutes = `0${dateMinutes}`;
    }

    dateHoursMinutes = `${dateHours}:${dateMinutes}`;

    for (let i=0; i < messageTime.length; i++) {
        messageTime[i].innerHTML = dateHoursMinutes;
    }
}

getRealDate();
chatWidgetMessages.innerHTML += `
    Сообщение от робота:
        <div class="message">
            <div class="message__time">${dateHoursMinutes}</div>
            <div class="message__text">Добрый день!</div>
        </div>
    `;

chatWidgetMessages.innerHTML += `
    <div class="client-message">Сообщение от клиента:</div>
        <div class="message message_client">
            <div class="message__time">${dateHoursMinutes}</div>
            <div class="message__text">Добрый день!</div>
        </div>
    `;

    document.querySelector('.client-message').style.textAlign = "right";
    
    chatWidgetInput.addEventListener('keydown', e => {
    if (chatWidgetInput.value) {
        if (e.keyCode === 13) {
            getRealDate();

            chatWidgetMessages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${dateHoursMinutes}</div>
                    <div class="message__text">${chatWidgetInput.value}</div>
                </div>
            `;
            chatWidgetInput.value = '';
            
            chatWidgetMessagesContainer.scrollTop = chatWidgetMessagesContainer.scrollHeight;

            setTimeout(function replyMessage() {
                getRealDate();

                chatWidgetMessages.innerHTML += `
                    <div class="message">
                        <div class="message__time">${dateHoursMinutes}</div>
                        <div class="message__text">${chatBotMessages[Math.floor(Math.random() * chatBotMessages.length)]}</div>
                    </div>
                `;

                chatWidgetMessagesContainer.scrollTop = chatWidgetMessagesContainer.scrollHeight;
            }, 10000)
        }
    }
})

let timer = 0;

function setTimer() {
    if (timer) {
        clearInterval(timer);
    } 

    timer = setInterval(function() {
        getRealDate();

        chatWidgetMessages.innerHTML += `
        <div class="message">
            <div class="message__time">${dateHoursMinutes}</div>
            <div class="message__text">${chatBotMessagesWaitingAReply[Math.floor(Math.random() * chatBotMessagesWaitingAReply.length)]}</div>
        </div>
        `;

        chatWidgetMessagesContainer.scrollTop = chatWidgetMessagesContainer.scrollHeight;
    }, 5000);
}

window.addEventListener('click', setTimer);
window.addEventListener('keypress', setTimer);	