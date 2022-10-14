// Напишите маленькое приложение Timer:
//
//     Создайте папку Timer
// Создайте базовую структуру проекта из трех файлов html, css, js
// Функциональность приложения:
//     Клавиша start - для запуска таймера
// Клавиша stop - для остановки таймера
// Циферблат с текущим временем в формате XX sec
// Примечания:
//
//     Таймер измеряет время только в секундах
// После остановки таймера, если снова нажать клавишу start таймер запуститься с текущего результата, а не с начала.

const clock = document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const proceed = document.querySelector(".proceed");

let counter;
let timeout = null;

// Функция работы таймера
function createTimer() {
    counter++;
    clock.textContent = counter;                           // Отображение счетчика на экране
    clearTimeout(timeout);
    timeout = setTimeout(createTimer, 1000);        // Номер текущего таймера записывается в переменную
}

// Функция начала таймера
function startTimer() {
    counter = 0;
    createTimer();
}
start.addEventListener("click", startTimer);

// Функция остановки таймера
function stopTimer() {
    clearTimeout(timeout);
}
stop.addEventListener("click", stopTimer);

// Функция продолжения таймера с места остановки таймера
function proceedTimer() {
    counter--;
    createTimer();
}
proceed.addEventListener("click", proceedTimer);































