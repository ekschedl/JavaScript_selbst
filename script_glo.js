"use strict";

const lists = document.querySelectorAll('.list')
const elems = document.querySelectorAll('.elem')

console.log(lists)
console.log(elems)

const newElem = document.createElement('li')

newElem.classList.add('elem')
newElem.textContent = "step 9 create Element"
lists[1].append(newElem)

console.log(newElem)