'use strict';

console.dir(document);
const  btn= document.getElementById('btn')
const block =document.querySelector('.block')
console.dir(block);
const clientHeight= block.clientHeight
const clientWidth= block.clientWidth
const offsetWidth= block.offsetWidth// это то что счтоит в css
const offsetHeight= block.offsetHeight// это то что счтоит в css
const scrollHeight= block.scrollHeight // высота всего контента в блоке /не  учитывают полосы прокрутки
const scrollWidth= block.scrollWidth// ширина всего контента в блоке /не учитывают полосы прокруткик
console.log("clientHeight", clientHeight);
console.log("clientWidth", clientWidth);
console.log("offsetWidth", offsetWidth);// это то что счтоит в css
console.log("offsetHeight", offsetHeight);// это то что счтоит в css
console.log("scrollWidth", scrollWidth); // напрямую на них повлиять не можем
console.log("scrollHeight", scrollHeight); // напрямую на них повлиять не можем



// // + 17 + 2 чтобы убрать скроллбары
// btn.addEventListener('click', () =>{
//     block.style.height=` ${block.scrollHeight + 17 + 2 }px`
//     block.style.width=` ${block.scrollWidth + 17 +2}px`
// })

//пошаговый скролл
btn.addEventListener('click', () =>{
    // block.scrollTop+=10
    // block.scrollLeft+=10
    //эти строки заменяют .scrollBy
block.scrollBy(0,20)
console.log(block.getBoundingClientRect())// показывает координаты  эдемента относительно страницы 
// block.scrollTo(0,100) только один шаг потворяться не будет
console.log(block.getBoundingClientRect().top)
const elemRect =block.getBoundingClientRect()
console.log(elemRect)
})

// window.addEventListener('resize', () => {
//     const height = document.documentElement.clientHeight;
//     const width = document.documentElement.clientWidth;
//     console.log("clientHeight", height);
//     console.log("clientWidth", width);
// });

// window.addEventListener('scroll', () => {
//     const top = document.documentElement.scrollTop;
//     const left = document.documentElement.scrollLeft;
//     console.log("top", top);
//     console.log("left", left);
// });

// btn.addEventListener('click', () =>{
//     document.documentElement.scrollTop=100
// })
