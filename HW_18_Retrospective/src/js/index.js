// ####  Homework 33

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}
//-------------------------------------------------------------------------------------------
// //1. Создать строку из названий предметов написаных через запятую
console.log(Object.keys(subjects).toString());

//--------------------------------------------------------------------------------------------
// // 2. Посчитать общее количнство студентов и учителей на всех предметах
const sum = value =>
    value instanceof Object ? Object.values(value).reduce((acc, n) => acc + sum(n), 0) : value;
console.log(sum(subjects));

//------------------------------------------------------------------------------------------
// 3. Получить среднее количество студентов на всех пердметах

let average = 0;
for (let key in subjects) {
    average += subjects[key].students / Object.keys(subjects).length;
}
console.log(average);

//------------------------------------------------------------------------------------------
// // 4. Создать массив из объектов предметов
const arrSubjects = Object.keys(subjects);
console.log(arrSubjects);

//--------------------------------------------------------------------------------------------
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на
// факультете от большего к меньшему

const arrSub = Object
    .keys(subjects)
    .sort((a, b) => subjects[b].students-subjects[a].students)
console.log(arrSub);
