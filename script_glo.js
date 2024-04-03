"use strict";

const lists = document.querySelectorAll('.list')
const elems = document.querySelectorAll('.elem')

console.log(lists)
console.log(elems)

// elems[2].remove()
// elems[4].remove()

console.log(elems)

// append помещает всегда в конец списка
// lists[1].append(elems[2])//     забирает из исходного места и перемещаетб то есть remove  здесь необязательно
// lists[1].append(elems[4]) // помещает всегда в конец списка
// lists[1].append(elems[3]) // помещает всегда в конец списка

// // prepend помещает всегда в начало списка
// lists[1].prepend(elems[5]) // 
// lists[1].prepend('prepend zeile') // 

// // позволяют  вставить после определенного элемента, здесь поменял местами
// lists[0].before(lists[1]) // 
// elems[3].before(elems[0]) // 
// elems[3].after(elems[5]) //

// lists[0].after(lists[1]) 

// // replaceWith заменяет один элемент другим
// elems[4].replaceWith('Привет  replaceWith 4') //

const cloneElem = elems[3].cloneNode(true)

cloneElem.classList.add('green-color')
console.dir(cloneElem)
cloneElem.innerHTML ="<strong>cloneElem 3 - tra la la und .innerHTML strong </strong>" 
// cloneElem.innerHTML =" "

lists[1].append(cloneElem)/
console.log(cloneElem);
