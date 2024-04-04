"use strict";
// https://webdevblog.ru/ispolzuem-dom-kak-pro/
//https://learn.javascript.ru/modifying-document

const lists = document.querySelectorAll('.list')
const elems = document.querySelectorAll('.elem')
const title =document.getElementById('title')
// NEUE COMMANDs   только добавляет и не удалает старый текст
// title.insertAdjacentText('beforebegin', 'beforebegin')
// title.insertAdjacentText('afterend', 'afterend')
// title.insertAdjacentText('beforeend', ' beforeend')
// title.insertAdjacentText('afterbegin', 'afterbegin ')
// console.log(title)


// title.insertAdjacentElement('beforebegin', elems[0])
// title.insertAdjacentElement('afterend', elems[1])
// title.insertAdjacentElement('beforeend', elems[2])
// title.insertAdjacentElement('afterbegin', elems[3])
// console.log(title)

// title.insertAdjacentHTML('beforebegin', '<span>step01_insertAdjacentHTML</span>')
// title.insertAdjacentHTML('afterend', '<span>step02_insertAdjacentHTML</span>')
// title.insertAdjacentHTML('beforeend', '<span>step03_insertAdjacentHTML</span>')
// title.insertAdjacentHTML('afterbegin', '<span>step04_insertAdjacentHTML</span>')
// console.log(title)

//сравнение старыз и новых методов
lists[1].append(elems[4],elems[2], 'ривет я строка')// можно добавить  просто строку и черезаппед можно сразу несколько элементов перемещать
lists[1].appendChild(elems[5])// только один аргумент и нельзя передать просто строку
const el = lists[1].appendChild(elems[1])//может вернуть тот элемент который  мы  добавляем через него
console.log(el)

lists[1].insertBefore(elems[5],elems[1])// before
lists[1].replaceChild(elems[5],elems[1])// replaceWith

lists[0].removeChild(elems[7])//remove

// Скажем, вы хотите вставить <a> прямо перед этим <p>.
const p = document.querySelector('p');
p.insertAdjacentHTML('beforebegin', '<a></a>');
//Существует также эквивалентный метод для вставки элементов DOM:

const link = document.createElement('a');
const p = document.querySelector('p');
p.insertAdjacentElement('beforebegin', link);
//и текста:

p.insertAdjacentText('afterbegin', 'foo');
// Если у вас есть этот HTML:
// <div class="first">
//   <h1>Title</h1>
// </div><div class="second">
//   <h2>Subtitle</h2>
// </div>
// и допустим нем необходимо <h2> вставить после <h1>:
// const h1 = document.querySelector('h1');
// const h2 = document.querySelector('h2');
// h1.insertAdjacentElement('afterend', h2);
// он будет просто перемещен, а не скопирован:
// <div class="first">
//   <h1>Title</h1>
//   <h2>Subtitle</h2>
// </div><div class="second">
  // </div>

// Элемент, которым он заменен, может быть новым элементом, созданным с помощью document.createElement, или элементом, который уже является частью того же документа (в этом случае он снова будет перемещен, а не скопирован):
// <div class="first">
//   <h1>Title</h1>
// </div>
// <div class="second">
//   <h2>Subtitle</h2>
// </div>
// const h1 = document.querySelector('h1');
// const h2 = document.querySelector('h2');
// h1.replaceWith(h2);
// // Результат
// <div class="first">
//   <h2>Subtitle</h2>
// </div>
// <div class="second">
  // </div>


// Удаление элемента
// Просто вызовите метод remove:
// const container = document.querySelector('#container');
// container.remove();  // hasta la vista, baby


// Гораздо лучше, чем по старинке
// const container = document.querySelector('#container');
// container.parentNode.removeChild(container);
// Для добавления, удаления и переключения класса 
// используется методы add, remove и toggle
// let container = document.querySelector('#myId');
// container.classList.add('newClass');
// container.classList.remove('newClass');
// container.classList.toggle('newClass');

// Получение следующее элемента
// В jQuery есть довольно часто 
// используем оператор next(), 
// он возвращает элемент, который следует 
// непосредственно за текущим элементом наборе. 
// В современном API для этого есть функция
//  nextElementSibling
// let next = document.querySelector('#myId').nextElementSibling;


//В новом API для этого есть cloneNode
// let clonedElement = document.querySelector('.class').cloneNode(true);

//let div2 = div.cloneNode(true); // клонировать сообщение
// div2.querySelector('strong').innerHTML = 'Всем пока!'; // изменить клонированный элемент
// div.after(div2); // показать клонированный элемент после существующего div

// function getListContent() {
//     let fragment = new DocumentFragment();  
//     for(let i=1; i<=3; i++) {
//       let li = document.createElement('li');
//       li.append(i);
//       fragment.append(li);
//     }
//     return fragment;
//   }
//   ul.append(getListContent()); // (*)
//   <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>

// Проверка DOM
//Например, matches определяет, будет ли элемент соответствовать определенному селектору:

//<p class="foo">Hello world</p>
const p = document.querySelector('p');
p.matches('p');     // true
p.matches('.foo');  // true
p.matches('.my-class');  // false, нет класса "my-class"

//является ли элемент дочерним по отношению к другому элементу с помощью метода contains:

// {/* <div class="container">
//   <h1 class="title">Foo</h1>
// </div>
// <h2 class="subtitle">Bar</h2> */}
const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
container.contains(h1);  // true
container.contains(h2);  // false

// DOM-узел можно создать двумя методами:
// document.createElement(tag)
// Создаёт новый элемент с заданным тегом:
// let div = document.createElement('div');
// document.createTextNode(text)
// Создаёт новый текстовый узел с заданным текстом:
// let textNode = document.createTextNode('А вот и я');
let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

  document.body.append(div);
//  Вот методы для различных вариантов вставки:
// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.
// insertAdjacentHTML/Text/Element
//{/* <div id="div"></div>{/* <script>
//   div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
//   div.insertAdjacentHTML('afterend', '<p>Пока</p>');
// </script>
// …Приведёт к:

// <p>Привет</p>
// <div id="div"></div>
// <p>Пока</p> */} */}

ol.before('before'); // вставить строку "before" перед <ol>
ol.after('after'); // вставить строку "after" после <ol>

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // вставить liFirst в начало <ol>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast); // вставить liLast в конец <ol>

document.body.insertAdjacentHTML("afterbegin", `<div class="alert">
<strong>Всем привет!</strong> Вы прочитали важное сообщение.
</div>`);