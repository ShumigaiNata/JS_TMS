// Task 1 +++
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

let day = {
    monday: 1,
    tuesday: 2,
}

// delete day.monday;
// delete day. tuesday;

for ( let key in day ) {
    delete day[key];
}


console.log(day);

// Task 2 +++
// Создать любой обьект с двумя ключами и любыми значениями в них,
// а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true

let cat = {
    name: "Taya",
    age: 3
}
console.log("name" in cat);

// Task 3 +++
// Дан обьект:
// C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }

for (let key in student) {
    console.log(key);
}

for (let key in student) {
    console.log(student[key]);
}


// Task 4 +++
// Дан обьект: Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

// Task 5 +++
// Дан обьект: Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
    ilya: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
let sum = 0;
let number = 0;

for (let key in salaries){
     sum+=salaries[key];
     number++;
 }
let average = sum/number;
console.log(average);

// Task 6
// Создать валидатор, запросить у пользователя логин и пароль для регистрации.
// Затем данные записать в обьект. Потом попросить пользователя подтвердить данные.
// Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.

let loginUser = prompt("Введите логин!", "user");
let passwordUser = prompt("Введите пароль!", "1111");

let register = {};
register.login = loginUser;
register.password = passwordUser;

let confirmLogin = prompt("Подтвердите ваш логин!");
let confirmPassword = prompt("Подтвердите ваш пароль!");

if (loginUser === confirmLogin || passwordUser === confirmPassword) {
    alert("Добро пожаловать!");
} else {
    alert("Попробуйте ещё раз!");
}

//                                              ADVANCED level

// Task 1 +++
// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей.
// Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести
// в консоль словами. Давайте напишем программу которая будет за нас переводить формат
// и выводить результат в консоль.

let teamA = prompt("Команда А забила: ", "2");
let teamB = prompt("Команда B забила: ", "1");

    let check = {
        0: "ноль",
        1: "один",
        2: "два",
        3: "три",
        4: "четыре",
        5: "пять",
        6: "шесть",
        7: "семь",
        8: "восемь",
        9: "девять"
    };

    console.log(`Счет игры: ${check[teamA]}:${check[teamB]}!`);

//                                           Task 2
// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

function compareStudentObjects (student1, student2){
   return (student1.name === student2.name && student1.age ===student2.age) ? "true" :"false";
}

console.log(compareStudentObjects (student1, student2));

//                                           Task 3
// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль.
// Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ.
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}

function  findTheError (animals, bird) {
    return (bird in animals) ? (animals[bird].name) : ("Error");
}

console.log(findTheError(animals, "bird"));


let key = "bird";
let key2 = "cat";
console.log(key in animals);
console.log(key2 in animals);


