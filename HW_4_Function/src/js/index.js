// Task 1  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Написать функцию **getSum**, которая будет высчитывать
// сумму чисел от нуля, до параметра, который мы в неё передаем

function getSum(param) {
        let sum = 0;
        for (let i = 1; i <= param; i++){
                sum += i;
        }
        return sum;
}
console.log(getSum(100));

// Task 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Напишите функцию которая в качестве аргумента принимает в себя
// сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:
//     + процентная ставка в год — 17%,  + количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

function calculateLoan (sum, bid, years) {
    return (sum * bid / 100) * years;
}
console.log(calculateLoan(10000, 17 , 5));

// Task 3 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
//     + строку     + значение от     + значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

function trimString (str, valueFrom, valueBy) {
    return str.slice (valueFrom, valueBy);
}
const strNew = trimString ("Hello!" ,0 ,2);
console.log (strNew);

// Task 4 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Написать функцию **getSumNumbers**, которая будет принимать число и
// вычислять сумму цифр из которых состоит число.

function getSumNumbers (number) {
    let sum = 0;
    let str = String(number);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str [i]);
    }
    return (sum)
}
const sumNumber = getSumNumbers (2021);
console.log (sumNumber);

// Task 5 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Написать функцию **`getSum`** которая принимает два целых числа a и b,
// которые могут быть положительными или отрицательными,
// найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

// getSum(1, 0) == 1   // 1 + 0 = 1
// getSum(1, 2) == 3   // 1 + 2 = 3
// getSum(0, 1) == 1   // 0 + 1 = 1
// getSum(1, 1) == 1   // 1 Since both are same
// getSum(-1, 0) == -1 // -1 + 0 = -1
// getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function getSum (a, b) {
    let sum = 0;
    for (a; a <= b; a++) {
        sum += a;
    }
    return sum;
}

const value = getSum (-1,1);
console.log (value);

// Task 6 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя
// > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

function fooboo (boolean, foo, boo) {
   let bool = !!boolean;

    if (bool === true) {
       return nameFoo();
   } else {
       return  nameBoo();
   }
}
function nameFoo(){
    console.log("My name Foo!");
}

function nameBoo(){
    console.log("My name Boo!");
}
fooboo (22, nameFoo, nameBoo);


//                                                  ADVANCED level
//
// Task 1 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// + Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать **true**, если треугольник можно построить со
// сторонами заданной длины, и **false** в любом другом случае.

function sideTriangle (a, b, c) {
    if (a >= 1 && b >= 1 && c >= 1) {  // если суммы а и b и c  больше 1, то true
        return true;
    } else {
        return false;
    }
}
console.log(sideTriangle(2, 3, 5));

// Task 2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// + Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты.
//     Каждый квадрат имеет размер 1x1 и не может быть разбит.
//   Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
// + Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные
// квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.
// + Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются,
// если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.
//
function numberOfChocolateBreaks (n, m) {
    if (n <= 1 && m <= 1){
        return 0;
    } else if (n >= 1 && m >= 1) {
        return  n * m - 1;
    }
}
console.log(numberOfChocolateBreaks(2, 3));

// Task 3 ---------------------------------------------------------------------------------------------
//
// + Напишите программу для вычисления общей стоимости покупки телефонов.
//Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете.
// Вы также будете покупать аксессуары для каждого из телефонов.
// + После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран
//вычисленную сумму покупки, правильно отформатировав её.
//+ Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
// + Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара»,
// также как и переменную для вашего «баланса банковского счета».
// + Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты
// и округлением до двух знаков после запятой.
// +  Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(..).
// Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!

const tax = 5;
const phonePrice = 1700;
const accessoryPrice = 100;
const sumOfPhonesAndAccessories = phonePrice + accessoryPrice;
const bankAccountBalance = 3900;
let continueShopping = true;
let purchasePrice = 0; //сумма покупки

function totalPurchasePrice(price) { //общая сумма покупки

    function roundPrice() {
        return price.toFixed(2) + " руб";
    }

    while (continueShopping) { // продолжить покупку
        purchasePrice += sumOfPhonesAndAccessories

        if (purchasePrice <= bankAccountBalance) {    // если цена покупки меньше баланса счета

            continueShopping = confirm("Сумма покупки " + purchasePrice + ", Продолжить?");   // добавлять стоимость покупки
        } else {
            continueShopping = false;
            alert("Баланса не достаточно!");
        }
        price = purchasePrice + (calculateTax() * purchasePrice);  // стоимость покупки + налога
    }
        alert("Общая сумма покупки и налога составляет: " + roundPrice(price));

    function calculateTax() {
        return tax / 100;
    }
    calculateTax(tax);

    function showBalance(bankBalance, priceAll) {   //вывести баланс счета - покупки
        let compareBalance = bankBalance - priceAll;
        if (bankBalance >= priceAll) {
            alert("Ваша покупка составляет: " + priceAll + "! " + "Оплатить товар?" + " Остаток средств на карте: " + compareBalance);
        } else if (bankBalance < priceAll) {
            alert(" Недостаточно средств чтобы совершить покупку!");
        }
    }

    showBalance(bankAccountBalance, price);
}

totalPurchasePrice();