"use strict"; //ES6 2015 viele Neugkeiten
var v =10
//let a=10 zeigt nicht in winddow
console.log(window)
// var глобальная видимость
//let const в области видимости функции
for (var a = 0; a < 5; a++) {
    console.log(window)
    console.log(a)
    setTimeout(() =>{
        console.log(a)
    })
}

for (let a = 0; a < 5; a++) {
    console.log(window)
    console.log(a)
    setTimeout(() =>{
        console.log(a)
    })
}


const user= {
    name:'Alex',
    age:34,
    say: function(){
        const foo = (name, age =20) => {
            console.log('Привет, меня зовут ' + name + '!');
            console.log('Мне ' + age + 'лет');
            console.log('Привет, меня зовут ' + name + '!\n' + 
            'Мне ' + age + 'лет');
            console.log(`Привет, меня зовут ${name} !
Мне ${age + 1}  года`);
            
        }
        foo('Alex', 34)
    }
}

user.say()



