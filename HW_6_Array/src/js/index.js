//                                        Task 1
// Дан массив: Выведите в консоль его длину.

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//                                        Task 2
// Дан массив: Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat'];
console.log( animals.length-1 );

//                                        Task 3
// Дан массив: Удалите все элементы в массиве и выведите в консоль полученный результат.
// Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90];
// console.log(numbers.splice(0,5));
// console.log(numbers);

numbers.length = 0;

console.log(numbers);

//                                        Task 4
// Дан массив:
//     Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
//     Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
//     Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push("Borya");
console.log(students);

students.shift();
students.unshift("Andrey");
console.log(students);

//                                        Task 5
// Дан массив: Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.

const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
    console.log( cats[i] );
}

for (let cat of cats) {
    console.log( cat );
}

//                                        Task 6
// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа 8

const evenNumbers = [2, 4, 6, 9, 10];
const oddNumbers = [1, 3, 5, 8, 9];
const allNumbers = evenNumbers.concat(oddNumbers);

console.log(allNumbers.indexOf(8));

//                                         Task 7
// Дан массив: Наш бинарный массив неполный, в нем явно не хватает единиц.
//     Превратите данный массив в строку.
//     [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0];
let string = binary.join("1");

console.log(typeof string);


//                                     ADVANCED level
//
//                                         Task 1
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

function checkPalindrome (str) {
    let stringFindArray = str.split("").reverse().join("");
    return (str === stringFindArray) ? "true" : "false";
}

console.log(checkPalindrome("заказ"));

//                                         Task 2
// Выведите в консоль среднее значение чисел в многомерном массиве.
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];
const combine = matrix.flat();
const mean = (combine.reduce((acc, val) => acc + val, 0)) / combine.length;

console.log(mean);

//                                         Task 3

// Дан массив: Создайте два массива, в один поместите все положительные числа включая 0,
//     в другой все отрицательные. Оба массива затем выведите в консоль.

const numbers = [-14, 24, -89, 43, 0, -1, 412, 4];
let negative = [];
let positive = [];

for (let i = 0; i < numbers.length; i++) {
    (numbers[i] >= 0) ? positive.push(numbers[i]) : negative.push(numbers[i]);
}

console.log(positive);
console.log(negative);

//                                         Task 4
// Создать массив длинной не менее 5, из динамически созданных случайных чисел.
// Далее написать алгоритм который берет все числа из исходного массива, возводит
// их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

let cubeArray = [];
function getRandomInt (min, max){
for (let i = 0; i < 5; i++) {
        cubeArray.push(Math.floor(Math.random() * max));
    }
    return cubeArray;
}

let randomArray = getRandomInt( 1,100);

let newCubeArray = [];

function getCubeArray (array) {

    for (let i = 0; i < array.length; i++){
        newCubeArray.push(array[i]**3);
    }
        return newCubeArray;
}

console.log(randomArray);
console.log( getCubeArray(randomArray) );
