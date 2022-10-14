"use strict";


// Task 1  +++
// Выведи все элементы массива в консоль с помощью метода forEach
// Реализуйте решение двумя способами, используя function declaration & arrow function

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(value => console.log(value));

fibonacci.forEach(function (value){
    console.log(value);
})


// Task 2 +++
// Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент
// массива будет содержать строку вида:
// Реализуйте решение двумя способами, используя function declaration & arrow function.
// ['member 1: Darya', 'member 2: Masha', ... etc]

let stringArray = users.map((item, index) => `member ${index + 1}: ${item}`);
console.log(stringArray);

let getStringArray = users.map (function (item, index) {
    return `member ${index + 1}: ${item}`;
});
console.log(getStringArray);


// Task 3 +++
// С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.
// Реализуйте решение двумя способами, используя function declaration & arrow function.
let numbers = [7, -4, 32, -90, 54, 32, -21];

let positiveArray = numbers.filter(item => item >= 0);
console.log(positiveArray);

let getPositiveArray = numbers.filter( function (item) {
     return item >= 0;
});
console.log(getPositiveArray);

// Task 4 +++
// Используя метод reduce получите сумму всех чисел массива.
// Реализуйте решение двумя способами, используя function declaration & arrow function.
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

let sumOfArrayNumbers = fibonacci.reduce((sum, current) => sum + current);
console.log(sumOfArrayNumbers);

let sumArray = fibonacci.reduce( function (sum, current) {
    return sum + current;
});
console.log(sumArray);

// Task 5 +++
// Используя метод find найдите в массиве первое четное число.
// Реализуйте решение двумя способами, используя function declaration & arrow function.
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let findEvenNumber = numbers.find(item => item % 2 === 0);
console.log(findEvenNumber);

let firstEvenNumber = numbers.find( function (item) {
    return item % 2 === 0;
});
console.log(findEvenNumber);


//                                              ADVANCED level
// Task 1 +++
// Написать функцию конструктор Student
// В каждом объекте студента должны быть поля salary , rate , name

// Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.
//     На основе функции создать минимум 5 студентов и имя каждого студента должно
//     соответствовать имени студента из вашей группы.
//     Создать массив students и поместить в него студентов.
//     Написать функцию которая принимает массив студентов. И вычисляет общую сумму
//     кредитов которую можно выдать группе.
//     rate имеет 4 категории A B C D

// A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// D - плохой рейтинг и мы не можем дать кредит

function Student(salary, rate, name) {
    this.salary = salary;
    this.rate = rate;
    this.calcRating = function () {
        switch (this.rate) {
            case "A":
                return this.salary * 12;
            case "B":
                return this.salary * 9;
            case "C":
                return this.salary * 6;
            case "D":
                return this.salary = 0;
            default:
                return 0;
        }
    };
    this.name = name;
}

let student1 = new Student(500, "B", "Bill");
let student2 = new Student(300, "D", "Tom");
let student3 = new Student(400, "A", "John");
let student4 = new Student(700, "C", "Jack");
let student5 = new Student(600, "A", "Lyi");

let studentArray = [];
studentArray.push(student1, student2, student3, student4, student5);  // добавляем студентов в массив

let calcSumCredit = studentArray.reduce((sum, salary) => sum + salary.calcRating(), 0);
console.log(calcSumCredit + "руб");

// Task 2 +++
// Тролли атакуют наш раздел с комментариями!!!
//     Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
//     Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
//     Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
//     Примечание: для этой задачи y не считается гласной.

function deleteAllMain(str) {
    let strConsonants = str.toLowerCase().replace( /[aeuio]/g,  "" );
    return strConsonants;
}
console.log(deleteAllMain("This website is for losers LOL!"));

    Task 3 +++
Нет истории, нет теории
В приведенных ниже примерах показано, как написать функцию:
Параметр - это строка, которая включает только буквы от a..z и A..Z.
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

function capitalizeLetter (str) {
    let arr = str.split('');
    let increaseArr = arr.map(function (item, index) {
        return item.charAt(0).toUpperCase() + item.repeat(index).toLowerCase();
    })
    return increaseArr.join("-");
}
console.log(capitalizeLetter("abcd"));
console.log(capitalizeLetter("RqaEzty"));
console.log(capitalizeLetter("cwAt"));

//     Task 4 +++
// Самый высокий и самый низкий
// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать
// наибольшее и наименьшее число.
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.

function getArray (str) {
    return str.split(" ");
}

let arr1 = getArray("1 2 3 4 5");
let arr2 = getArray("1 2 -3 4 5");
let arr3 = getArray("1 9 3 4 -5");

console.log(`${Math.max.apply(null, arr1)} > ${Math.min.apply(null, arr1)}`);
console.log(`${Math.max.apply(null, arr2)} > ${Math.min.apply(null, arr2)}`);
console.log(`${Math.max.apply(null, arr3)} > ${Math.min.apply(null, arr3)}`);

function getArray (arr) {
    let getNewArray = arr.split(" ").sort((max, min) => max - min).reverse();
    return `${getNewArray[0]} > ${getNewArray[getNewArray.length-1]} `;
}

console.log(getArray("1 2 3 4 5"));
console.log(getArray("1 2 -3 4 5"));
console.log(getArray("1 9 3 4 -5"));

//     Task 5 +++
//     Изограммы
// Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию,
// которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая
// строка является изограммой. Регистр букв мы игнорируем.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function checkIsogram (str) {
    return str.toLowerCase()
              .split("")
              .filter((item, index, array)=> array.indexOf(item) === index).length === str.length;
}

console.log(checkIsogram("Dermatoglyphics"));
console.log(checkIsogram("aba"));
console.log(checkIsogram("moOse"));

// Task 6 +++
// Считаем коды символов
// Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число.
// Поместите результат в переменную total1
// Затем замените все числа 7 на число 1 и назовите это число total2
// После верните разницу между суммой цифр total1 и total2
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

function getSum (str) {
    let sum = "";
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i)
    }
   return sum;
}
let total1 = (getSum("ABC"));

let total2 = total1.replace("7", "1");

let calcDifference = total1-total2;
console.log(calcDifference);

// Task 7 +++
// Дубликаты
// Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен
// (, если этот символ появляется только один раз в исходной строке, или ), если этот символ встречается
// более одного раза в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("
//
function conventStr(str){
    return str
        .toLowerCase()
        .split('')
        .map( function (value, index, array) {
            return array.indexOf(value) === array.lastIndexOf(value) ? '(' : ')'
        })
        .join('');
}

console.log(conventStr("din"));
console.log(conventStr("recede"));
console.log(conventStr("Success"));
console.log(conventStr("(( @"));
