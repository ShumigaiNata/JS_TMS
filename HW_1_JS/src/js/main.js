                          // Task 1
// Создайте переменные,затем сложите----------------------------
// их и выведите результат в консоль разработчика.
let x = 20;
let y = 58;
let z = 42;
console.log(x+y+z);

                          // Task 2

// количество секунд в минуте----------------------------------
let minute = 1;
let second = minute * 60;
console.log(second);

// количество минут в часу-------------------------------------
let hours = 2;
let minute = hours * 60 ;
console.log(minute);

// количество часов в сутках-----------------------------------
let day = 2;
let hours = day * 24 ;
console.log(hours);

// количество суток в году------------------------------------
let year = 1;
let day = year * 365 ;
console.log(day);

// Посчитайте ваш возраст в секундах-------------------------
let year = 31;
let day = 365;
let hours = 24;
let minute = 60;
let second = 60;
let myAgeInSeconds = year * day * hours * minute * second;
console.log(myAgeInSeconds);



                               // Task 3

// Создайте две переменные.------------------------------------
// Поместите в них переменную count
// и превратите в строку,
// а userName наоборот в число.
// Попробуйте реализовать задачу двумя разными способами.

                          // 1 вариант

let count = 42;
let userName = "42";
count = "42";
userName = 42;
console.log(typeof count);
console.log(typeof userName);

                          // 2 вариант

let count = String(42);
let userName = Number("42");
console.log(typeof count);
console.log(typeof userName);






                              // Task 4

// Сложите переменные так, чтобы в результате--------------------
// получилось выражение: 12 белых медведей и
// результат выведите в консоль.

let a = 1;
a = "1";
let b = 2;
b = "2 ";
let c = "белых медведей";
console.log(a+b+c);



                              // Task 5

// Создайте переменные и поместите-------------------------------
// в них нижеприведенные слова. Затем создайте
// еще одну переменную lengthWords и посчитайте
// в ней длинну всех слов из списка:

let a = "доступ";
let b = "морпех";
let c = "наледь";
let d = "попрек";
let f = "рубило";
let lengthWords = a+b+c+d+f;
console.log(lengthWords.length);



                          //Task 6
// Создать 3 переменные разных типов и вывести
// в консоль для каждой из них строку следующего вида:

let a = "Hello!";
let b = 22;
let c = {
    d: 4,
    t: 6
};

console.log( a, typeof a);
console.log( b, typeof b);
console.log( c, typeof c);



                         // Task 7
// Запросить у пользователя имя----------------------------------
// и возраст и вывести их в консоль.

let user = {
    name: "Elena",
    age: 35,
    profession: "admin"
};
console.log(user.name);
console.log(user.age);


                          // ADVANCED level

                          // Task 1
// Поменяйте значение переменных местами
// не создавая дополнительной переменной:

let a = 4;
let b = 3;
[a,b] = [b,a];
console.log(a);
console.log(b);
