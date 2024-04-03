"use strict";

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