// У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.
//
// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒
// Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.
//
// Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.
//
// Реализуйте задачу двумя способами:
// - Promise chaining
// - Async / await

// ------------------------------  1 вариант  ----------------------------------------------------
// У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.
//
//     Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒
// Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.
//
//     Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.
//
// ###### Реализуйте задачу двумя способами:
//     - Promise chaining
// - Async / await

const URL = `https://jsonplaceholder.typicode.com/posts`;

function getPosts(text) {
    let li = document.createElement("li");
    let ul = document.querySelector(".list");
    li.innerText = text;
    ul.append(li);
}

fetch(URL)
    .then(response => response.json())
    .then(function(post) {
        getPosts(`${post[14].id} : ${post[14].body}`);
        getPosts(`${post[22].id} : ${post[22].body}`);
        getPosts(`${post[7].id} : ${post[6].body}`);
        getPosts(`${post[2].id} : ${post[2].body}`);
    })
    .catch(err => {
        console.error(`Произошла ошибка: ${err}`)
    })

// // ------------------------------  2 вариант  ----------------------------------------------------

const URL = `https://jsonplaceholder.typicode.com/posts`;

(async function printPosts() {
    const response1 = await fetch(`${URL}/15`);
    const title1 = await response1.json();
    getPosts(`${title1.id} : ${title1.body}`);

    const response2 = await fetch(`${URL}/23`);
    const title2 = await response2.json();
    getPosts(`${title2.id} : ${title2.body}`);

    const response3 = await fetch(`${URL}/7`);
    const title3 = await response3.json();
    getPosts(`${title3.id} : ${title3.body}`);

    const response4 = await fetch(`${URL}/3`);
    const title4 = await response4.json();
    getPosts(`${title4.id}: ${title4.body}`);
})()

function getPosts(text) {
    let li = document.createElement("li");
    let ul = document.querySelector(".list");
    li.innerText = text;
    ul.append(li);
}




























