"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным
// "super_link" и вывести этот элемент в консоль.

const superLink = document.getElementById("super_link");
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link",
// поменяйте текст внутри элемента на "ссылка".

const cardLink = document.querySelectorAll(".card-link");
cardLink.forEach((elem) => {
  elem.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link",
// которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardBody = document.querySelector(".card-body");
const cardBodyLink = cardBody.getElementsByClassName("card-link");
console.log(cardBodyLink);

// 4. Найти первый попавшийся элемент на странице у которого есть
// атрибут data-number со значением 50 и вывести его в консоль.

const dataNumber = document.querySelector("[data-number='50']");
console.log(dataNumber);

// 5. Выведите содержимое тега title в консоль.

const title = document.querySelector("title").innerHTML;
console.log(title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и
// добавьте созданный тег в начало элемента, который имеет класс "card".

const pNew = document.createElement("p");
pNew.textContent = "Привет";
const card = document.querySelector(".card");
card.prepend(pNew);

// 8. Удалите тег h6 на странице.

const h6 = document.querySelector("h6");
h6.remove();
