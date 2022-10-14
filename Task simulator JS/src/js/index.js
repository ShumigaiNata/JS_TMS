// Методы массивов
//---------------------------------------------------------------------------
// Напишите функцию camelize(str), которая преобразует строки
// вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
    let arr = str.split("-")
        .map(function (word) {
            return word[0].toUpperCase() + word.slice(1);
        })
        .join("");
    console.log(arr);
}
camelize("background-color");
camelize("list-style-image");

//---------------------------------------------------------------------------
// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b) => b-a);
console.log(arr);

//-----------------------------------------------------------------------------
// У нас есть массив строк arr. Нужно получить отсортированную копию,
// но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
    return arr.sort();
}
console.log(arr);

let sorted = copySorted(arr);
console.log(sorted);
//-----------------------------------------------------------------------------

// навешивание событий на картинки
window.onload = init;
function init() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

function showAnswer(eventObj){
    let image = eventObj.target;
    let name = image.id;
    name = name + ".jpg";
    image.src = name;
}

function reblur (eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}



function checkNoFlyList (pass) {
    return(pass.name ==="bill");
}

function checkNotPaid (pass) {
    return (!pass.paid)
}

let allCanFly = processPass(pass, checkNoFlyList)
    if (!allCanFly) {
        console.log("No");
    } else {
        console.log("Всё летят!")
    }

let allPaid = processPass(pass, checkNotPaid)
    if(!allPaid){
        console.log("Есть зайцы!")
    } else {
        console.log("полетели!")
    }
console.log();
-----------------------------------------------------------------------------------------------------------------------------
задача пассажиры + обслуживание на борту самолета (страница 463)
let pass = [{name: "tom", paid: true, ticket: "coach"},
    {name: "bill", paid: false, ticket: "vip"},
    {name: "John", paid: true, ticket: "firstclass"},
    {name: "yana", paid: true, ticket: "coach"}];

// Функция получает список пассажиров и проверяет отдельного пассажира по заданному условию (например оплату билета, класс, имя)
function processPass(pass, checkName) {
    for (let i = 0; i < pass.length; i++) {
        if (checkName(pass[i])) {
            return false;
        }
    }
    return true;
}

// Функция выводит имя пассажира и оплату за билет
function printPass(pass) {
    let message = pass.name;
    if (pass.paid === true) {
        message = message + ": has paid";
    } else {
        message = message + ": has not paid";
    }
    console.log(message);
    return false;
}
processPass(pass, printPass)

// Функция проверяет на отношение к классу билета и выводит соответствующие напитки
function getDrink(pass) {
    let orderFunction; //функция заказа
    if (pass.ticket === "firstclass") {
        orderFunction = function () {
            console.log("Wine or cocktail");
        };
    } else if (pass.ticket === "coach"){
            orderFunction = function () {
                console.log("cola or water")
            }
        }
    else {
        orderFunction = function() {
            console.log("wine and cola or water");
        }
    }
        return orderFunction;
}

// Функция проверяет на отношение к классу билета и выводит соответствующий обед
function  getDinner(pass){
     let orderDinnerFunction;
     if (pass.ticket === "firstclass") {
         orderDinnerFunction = function() {
             console.log("Chicken or pasta");
         }
     } else if (pass.ticket === "coach") {
         orderDinnerFunction = function(){
             console.log("Nuts or crackers");
         }
     } else {
         orderDinnerFunction = function () {
             console.log("Red fish");
         }
     }
     return orderDinnerFunction;
}

// Функция приема заказа у пассажира
 function serveCustomer(pass) {
     let getDrinkOrderFunction = getDrink(pass);   // функция заказа напитков
     let getDinnerOrderFunction = getDinner(pass); // функция заказа обеда
     getDrinkOrderFunction();                      // вызываем функцию заказа напитков
     getDinnerOrderFunction();                     // вызываем функцию заказа обеда
}

// Функция перебирает всех пассажиров (как в массиве) и вызывает servePass для каждого пассажира
function servePass(pass){
    for(let i = 0; i<pass.length; i++) {
        serveCustomer(pass[i]);
    }
}
servePass(pass)

//------------------------------------------------------------------------------------------------------------------
// Отсортировать сорта колы: по названию, калорийности, цвету , объему продаж (страница 477)
let products = [{name: "Grapefruit", calories: 170, color: "red", sold: 8200},
    {name: "Oranges", calories: 160, color: "orange", sold: 12101},
    {name: "Cola", calories: 210, color: "caramel", sold: 25412},
    {name: "Diet Cola", calories: 0, color: "caramel", sold: 43922},
    {name: "Lemon", calories: 200, color: "clear", sold: 14983},
    {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
    {name: "Root Beer", calories: 200, color: "caramel", sold: 9909},
    {name: "Water", calories: 0, color: "clear", sold: 62123}
]

// 3 способа сортировки
let arr = [2,5,354,22];
// сортировка 3 способ
     arr.sort ((a, b) => a-b);
console.log(arr)

function arrSort(a, b) {

    // сортировка 1 способ
    if (a>b) return 1;
    if (a===b) return 0;
    if (a<b) return -1;

    // сортировка 2 способ
    return a-b;
}
arr.sort(arrSort)
console.log(arr)


// функция сортировки массива объектов по названию
function compareName(colaA, colaB) {
    return colaA.name - colaB.name;
}

// функция сортировки массива объектов по калориям
function compareCalories(colaA, colaB) {
    return colaA.calories - colaB.calories;
}

// функция сортировки массива объектов по цвету
function compareColor(colaA, colaB) {
    return colaA.color - colaB.color;
}

// функция сортировки массива объектов по объемам продаж
function compareSold(colaA, colaB) {
    return colaA.sold - colaB.sold;
}

function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name +
            ", Calories: " + products[i].calories +
            ", Color: " + products[i].color +
            ", Sold: " + products[i].sold);
    }
}
products.sort(compareName);
console.log(" Массив отсортирован по названию: ");
printProducts(products);


products.sort(compareCalories);
console.log(" Массив отсортирован по калориям: ");
printProducts(products);

products.sort(compareColor);
console.log(" Массив отсортирован по цвету: ");
printProducts(products);

products.sort(compareSold);
console.log(" Массив отсортирован по объемам продаж: ");
printProducts(products);

//----------------------------------------------------------------------------------------
// приготовить печеньки
window.onload = function() {
    let button = document.getElementById("bake");
    button.onclick = function() {
        console.log("Время печь печенье");
        cookies.bake(2500);
    };
};

let cookies = {
    instructions: "Разогреть духовку до 350...",
    bake : function (time) {
        console.log("Выпечка печенья.");
        setTimeout(done, time);
    }
};

function done() {
    alert("Печенье готово, вынимайте чтобы остыли.");
    console.log("Охлаждение печенья.");
    setTimeout(function() {
        alert("Печеньки классные, пора есть.")
    }, 1000);

}

//---------------------------------------------------------------------------------------


// Загрузить фото на сайт!

<input type="file" id="bannerImg" />
<img src="" id="tableBanner" />
<div id="res"></div>

Получить все переменные
let bannerImage = document.getElementById('bannerImg');
let result = document.getElementById('res');
let img = document.getElementById('tableBanner');

bannerImage.addEventListener('change', function () {
    let file = this.files[0];
    // объявить maxSize (3Mb)
    let maxSize = 3000000;

    if (file.type.indexOf('image') < 0) {
        result.innerHTML = 'invalid type';
        return;
    }
    let fReader = new FileReader();
    fReader.onload = function () {
        img.onload = function () {
            //если localStorage не работает, должно быть выдано исключение
            try {
                // передайте соотношение размера файла/maxSize к вашей функции toB64 на случай, если мы уже вышли за рамки
                localStorage.setItem("imgData", getBase64Image(img, (file.size / maxSize), file.type));
            } catch (e) {
                var msg = e.message.toLowerCase();
                // Мы превысили квоту localStorage
                if (msg.indexOf('storage') > -1 || msg.indexOf('quota') > -1) {
                    // мы имеем дело с изображением в формате jpeg: попробуйте уменьшить качество
                    if (file.type.match(/jpe?g/)) {
                        console.log('reducing jpeg quality');
                        localStorage.setItem("imgData", getBase64Image(img, (file.size / maxSize), file.type, 0.7));
                    }
                    // мы имеем дело с изображением png: попробуйте уменьшить размер
                    else {
                        console.log('reducing png size');
                        // maxSize - это общее приближение, которое я получил из некоторых тестов со случайным сгенерированным пикселем img.
                        var maxPxSize = 750000,
                            imgSize = (img.width * img.height);
                        localStorage.setItem("imgData", getBase64Image(img, (imgSize / maxPxSize), file.type));
                    }
                }
            }
        }
        img.src = fReader.result;
    };

    fReader.readAsDataURL(file);
});

function getBase64Image(img, sizeRatio, type, quality) {
    // если у нас есть svg, не конвертируйте его, svg точно будет светлее любого пиксельного изображения
    if (type.indexOf('svg+xml') > 0) return img.src;

    // если у нас есть jpeg
    if (type.match(/jpe?g/)) {
        // и sizeRatio в порядке, не конвертируйте его
        if (sizeRatio <= 1) return img.src;
    }
    // если у нас есть другой тип изображения
    else type = 'image/png';

    if (!quality) quality = 1;
    var canvas = document.createElement("canvas");
    // если наш файл изображения слишком большой, то уменьшите его размер
    canvas.width = (sizeRatio > 1) ? (img.width / sizeRatio) : img.width;
    canvas.height = (sizeRatio > 1) ? (img.height / sizeRatio) : img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // если мы уже пытались уменьшить его размер, но все равно не получается, то уменьшите качество jpeg
    var dataURL = canvas.toDataURL(type, quality);

    return dataURL;
}

function fetchimage() {
    var dataImage = localStorage.getItem('imgData');
    img.src = dataImage;
}

// Вызовите fetch, чтобы получить изображение из localStorage.
fetchimage();

//--------------------------------------------------------------------------
const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// 1. Создать строку из имен пользователей через запятую

let stringUserName = users.map(item => item.name).join(", ");
console.log(stringUserName)

// 2. Посчитать общее количество машин у пользователей
let cars = Object.keys(users).length
console.log(cars)
let totalNumberOfCars = Object.keys(users).map(element => element.cars.length).reduce((a, b) => a + b, 0);
console.log(totalNumberOfCars)


const a = users[0].cars + users[2].cars
console.log(a)
function educationUsers (users){
    if (users.hasEducation === true) {
        console.log("yt")
    }
}

educationUsers(users)




