'use strict'

const one = function(){
    //debugger
    console.log('start1')
    two()
    //debugger
    console.log('end1')
}
const two = function(){
   //debugger
    console.log('start2')
    three()
      //debugger
    console.log('end2')
}
const three = function(){
     //debugger
    console.log('run3')
}
  //debugger


setTimeout(three, 1000)

one()
// mit 'use strict' zeigt this - undefined
const five = function(){
    console.log(this)
}
five()

const user1 = {
    name:'Alex',
    say: say 
}

const user2 = {
    name:'Katja',
    say: say
}
    
function say(){//неявная привязка

    console.log(this.name);
}


 // явная привязка 2 метода:  методы вызывают функииб явная привязка контекста
//  say.call(user1, 1, 2)
//  say.apply(user2, [1, 2])//apply  принимает вторым агрументом в виде массива


const newSay = say.bind(user1)
const newSay2 = say.bind(user2)
newSay()
newSay2()

// менять цевт рамки
// const btns = document.querySelectorAll('button')
// const changeColorBorder = function (event){
// btns.forEach(function(btn) {
//     btn.style.border ="2px solid black"

// })
// event.target.style.border = "2px solid red"
// }

// btns.forEach(function (btn) {
//     btn.addEventListener('click', changeColorBorder)
// })



const user3 = {
    name:'Kaar',
    say: function (){

    console.log(this);
}}
// user3.say()
// setTimeout(user3.say, 2000) //выдаст  Window object
// // обходной путь:
setTimeout(function() {
    user3.say();
}, 2000)

// стрелочные функции / полное отсутствие собственного контекста
const counter = (a, b) => {
    return a + b
}
const counter2 = (a, b) => a + b
const counter3 = a => a + 3   
console.log(counter(1, 2));
console.log(counter2(1, 2));
console.log(counter3(2));

// в современном Javascript используют часто стрелочные функции; но если ваден контекст тогда function 
const obj = {
    array: [1, 2, 3, 4],
    someFunc: function() {
        this.array.forEach((item) => { 
            console.log(this);
            console.log(item);
        });
    }
};
obj.someFunc();


const func = () => ({ 
            name: "Jajak",
            city: "Bratsk"
})
console.log(func());