"use strict";
// console.log(document);
console.dir(document);
console.dir(document.childNodes);
console.dir(document.body);

const title = document.getElementById("title");
console.dir(title);
console.dir(title.textContent);
console.dir(title.style);
title.textContent = "DOM! DOM!"; // Исправлено: добавлен объект title перед свойством textContent
title.style.backgroundColor = "green"; // Изменение цвета фона на зеленый
// kommt immer massiv raus
const listItems = document.getElementsByTagName("li");
console.log(listItems);
console.log(listItems[1]);

const links = document.getElementsByClassName("link");
console.log(links);

const title1 = document.querySelector("#title");
console.log(title1);
const title2 = document.querySelector("h1");
console.log(title2);
const title3 = document.querySelector(".title");
console.log(title3);

const title4 = document.querySelector('[title = "Document Object Model"]');
console.log(title4);

const title5 = document.querySelector("header > ul");
console.log(title5);

const links2 = document.querySelectorAll(".link");
console.log(links2);
//const links = document.querySelectorAll(".link");
// links.forEach(link => console.log(link)); // Выведет все элементы с классом "link"
// Таким образом, основное различие между ними заключается в том, что getElementsByClassName возвращает псевдомассив,
//а querySelectorAll возвращает стандартный массив JavaScript.
links2.forEach(function (item) {
  console.log(item);
});

const list3 = document.querySelector("header > ul");
console.log(list3);
const listItems3 = list3.querySelectorAll("li");
console.log(listItems3);

console.dir(title);
title.classList.add("green-color");
title.classList.remove("title");
title.classList.toggle("title"); //..убирает если есть  класс и добавляет если нет этого класса

title.classList.contains("title");
console.log(title.classList.contains("title")); // true or false

console.log(title.getAttribute("title"));
title.setAttribute("title", "ku ku ku");
console.log(title.getAttribute("title"));
console.dir(title);
title.setAttribute("id", "ksksksks");
console.log(title);

console.log(title.hasAttribute("title")); // true or false

title.style.backgroundColor = "yellow";
console.dir(getComputedStyle(title));
console.dir(getComputedStyle(title).backgroundColor);
console.dir(getComputedStyle(title).fontSize);
