"use strict";
const btn = document.getElementById('btn')
console.log(btn)
console.dir(btn)


btn.onclick = function () {
alert('btn Klick  Klick Klick')
}
console.dir(btn)

const square = document.getElementById('square')

// square.onclick = function () {
//     alert('square Klick  Klick Klick')
// }
// console.dir(square)



const logger = function () {
    console.log('square Klick  Klick Klick')
}
const logger1 = function () {
    console.log('square Klick  Klick Klick!!!!')
}
// square.onclick  = logger 
// square.onclick  = logger1

// square.onclick = function() {
//     logger()
//     logger1()
// }
// console.dir(square)
//  square.onclick = null  чтоьы удалить функцию
// 

// // чтобы переопределить ниже написать
// square.onclick = function() {
//     logger()
// }


// square1.addEventListener('click', logger)

// или вот так
// square1.addEventListener('click', function() {
//     console.log('square Klick  Klick Klick!!!!!!!!QQQ')
// })
// square1.addEventListener('click', function() {
//     console.log('square Klick  Klick Klick!!!!!!!!Q55555')
// })
// square1.addEventListener('click', function() {
//     console.log('square Klick  Klick Klick!!!!!!!!8888')
// })

// square.addEventListener('click', logger)
// square.removeEventListener('click', logger)


const square1 = document.getElementById('square1')
let counter = 0

const logger11 = function () {
    counter++
    if (counter === 3) {
        square1.removeEventListener('click', logger11)
    }
    console.log(counter)
    console.log('square1 Klick  Klick Klick new')
}
square1.addEventListener('click', logger11)




const square3 = document.getElementById('square3')

const logger3 = function (event) {
    console.log(event.type)
}
square3.addEventListener('click', logger3)
// square3.addEventListener('mouseup', logger3)
// square3.addEventListener('mousedown', logger3)
// square3.addEventListener('mousemove', logger3)
square3.addEventListener('mouseenter', logger3)//  полностью игнорирует вложенность; границы желтого кружка важны
square3.addEventListener('mouseleave', logger3)// полностью игнорирует вложенностьб;границы желтого кружка важны
// square3.addEventListener('mouseover', logger3) // реагируют на вложенные элементы/ здесь граца  желтого круга 
// square3.addEventListener('mouseout', logger3)/// реагируют на вложенные элементы/ здесь граца  желтого круга 

// работа  с формами


const text = document.getElementById('text')
//const span = document.getElementById('text-span')
const range= document.getElementById('range')
const rangeSpan = document.getElementById('range-span')


const logger4 = function (event) {
    console.dir(event.type)
    // console.log(event.target)
    // console.dir(event.target)
    // console.dir(event.target.value)
    // span.textContent = event.target.value
    rangeSpan.textContent = event.target.value
}
// text.addEventListener('input', logger4)
// text.addEventListener('focus', logger4)// курсоср в области
// text.addEventListener('blur', logger4)// потеря  курсора из области
// text.addEventListener('change', logger4) // срабатывает когда значение импута будет измененено

// text.addEventListener('keyup', logger4) //зажатие клавиши
// text.addEventListener('keydown', logger4) // отжатие клавиши

range.addEventListener('input', logger4)
document.getElementById('range').addEventListener('change', logger4) // можно вешать на прямую и переменная не нужнаб но читабельнее с переменной


document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM построен')
})  // раньше было как аттрибут defer


 //  было раннее  много использованоб сейчас блокировки ставят в наше время
window.onbeforeunload = function () {
    return "Вы уверенны что хотите уйти со страницы?"
}