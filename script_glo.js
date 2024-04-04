"use strict";
const link =document.querySelector('a')
console.log(link)
link.addEventListener('click', function (event) {
    event.preventDefault()// чтобы при нажатии на ссылку нечего не случалось
    console.log('klick link')

})

// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault()// принажатти правой кнопки не откроется контекстное меню
//     console.log('никак / где  меню Лобовски ?')
// }
// )

const btn =document.querySelector('#e_btn')
const circle =document.querySelector('#circle')
const square =document.querySelector('#square')



const toggler = function(event) {
    // console.log(event.target)
    console.log(event.currentTarget)
    //event.stopPropagation() чтобы перкратить всплытие
    
    console.log('Событие сработало на ' + event.target.id + ' и перенеслось на ' + event.currentTarget.id)
    event.target.classList.toggle('green')
}
btn.addEventListener('click', toggler, true)
//btn.addEventListener('click', toggler), true)
circle.addEventListener('click', toggler, true)
square.addEventListener('click', toggler, true)// если добавим true  то повернет вспять  выслытиеб начнется  в обратную сторону

