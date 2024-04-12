"use strict";

// const Person1 = function(name, age) {
//     this.name = name
//     this.age = age
// }

// Person1.prototype.sayHello = function(){
//     console.log(`Привет меня зовут ${this.name}`);
// }
// const person1 = new Person1( 'Vlad', 23)
// person1.sayHello()
// console.log(person1)

class Person{
    constructor(name, age){
    this.name = name
    this.age = age
    Person.incrementCount()
    }

    static count = 0//b доступна  общему классь,
    //но экземплярам класса не доступна  console.log(person)// undefined
    //onsole.log(Person.count) // 0
    //
static getCount(){
    return Person.count
}
static incrementCount(){
    Person.count++

}
    sayHello (){
        console.log(`Привет меня зовут ${this.name}`);      
}
        
}
const person =new Person('Vlad', 23)
console.log(JSON.stringify(person).length);
const person1 =new Person('Vlad', 23)
const person2 =new Person('Vlad', 23)
const person3 =new Person('Vlad', 23)
person.sayHello()
console.log(Person.getCount());
console.log(person);


class FrontEndDev extends Person {
constructor(name, age, skills =[]) {
    super(name, age)// für die verbindung von zwei constructors
    this._skills = skills // нижнее подчеркивание говорит нельзч изменять б это для чтения get skills

}

get skills(){
    return this._skills
}

set skills(str){
    console.log(str);
    this.skills.push(str)
}

test(){
    super.sayHello// метод принадлежит родителю
}
}
//super  - это связываеще звено между классом наследником и классом прототипом / ч
// через него можно обращатсья к методам родительского класса
const dev =new FrontEndDev('vlad', 23)
console.log(dev);
dev.sayHello()
dev.test()
console.log(dev.skills);
dev.skills = 'первое свойство'
dev.skills = 'второе свойство'
dev.skills = 'третье свойство'
console.log(dev);

const sum = (a, b, c, ...params) =>{
    console.log(a)
    console.log(b)
console.log(c)
console.log(params)
}
sum(1,2,3,4,5,6)



const sum2 = (...params) =>{
    return params.reduce((sum, num) => sum + num)

}
console.log(sum2(23, 44, 12, 17))

//SPREAD чтобы соединить два массива
const firstAr =[1,2,4,4]
const secondAr =[5,6,7,8]
console.log([123, 333,...firstAr, 555, ...secondAr]);
