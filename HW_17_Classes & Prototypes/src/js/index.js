"use strict";
// Task 1 💻
// +Создайте класс Developer
//
// +Конструктор этого класса принимает один параметр name
// +Реализуйте метод startWork который возвращает строку:
//     name start work ...
//
// +Реализуйте метод endWork который возвращает строку:
//     name end work ...
//
// +Далее реализуйте два класса Frontend Backend которые будут наследовать методы из класса Developer
//
// Класс Frontend должен иметь свой уникальный метод buildWebSite который возвращает строку:
//
//     name start build website
//
// Класс Frontend должен иметь свой уникальный ключ websiteName в который мы записываем название веб-сайта над которым будет работать разработчик.
//
//     Класс Backend должен иметь свой уникальный метод buildServer который возвращает строку:
//
//     name start build server
//
// Проинициализируйте два класса Frontend Backend и вызовите у них все доступные методы.

class Developer {
    constructor(name) {
        this.name = name;
    }

    startWork() {
        return `${this.name} start work`;
    }

    endWork() {
        return `${this.name} end work`;
    }
}

class Frontend extends Developer {
    constructor(name, websiteName) {
        super(name);
        this.websiteName = websiteName;
    }

    buildWebSite() {
        return `${this.name} start build website`;
    }
}

class Backend extends Developer {
    constructor(name) {
        super(name);
    }

    buildServer() {
        return `${this.name} start build server`;
    }
}

const John = new Frontend('John');
console.log(John.startWork())
console.log(John.buildWebSite())
console.log(John.endWork())

const Bill = new Backend('Bill');
console.log(Bill.startWork())
console.log(Bill.buildServer())
console.log(Bill.endWork())






