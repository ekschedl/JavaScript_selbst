"use strict";

// const person1 = {
//     name: "vlad"
// }
// const person2 = {
//     name: "nina"
// }
// const person3 = {
//     name: "olja"
// }


// для этого пишем фнукцию конструктор/ с большой буквы
const Person = function(name) {
    this.name = name

    const age =33
    //D ТАКой записы через метод методы не равны! console.log(person1.sayHello === person3.sayHello).. false
    this.sayHello = function (){
        console.log("Hi, i am " +   this.name)
        console.log("i am  " +   age + " years old")
        }
}
 //в ТАКой записы через prototype  методы равны! console.log(person1.sayHello === person3.sayHello) true , но нет скрытых перемен
// Person.prototype.sayHello = function (){
// console.log("Hi, i am " +   this.name)
// }

const person1 = new Person("vlad") //всегда вызывается через оператора new
const person2 = new Person("nina") //даже если  не будет аргумента обект будет сосздат и name undefined
const person3 = new Person("olja")

const person4 ={
    name :"Anna"
}

console.log(person1)
console.log(person2)
console.log(person3)
console.log(person4)
person1.sayHello()
console.log(person1.sayHello === person3.sayHello)

const Person1 = function(name) {
    this.name = name
}



Person1.prototype.sayHello = function (){
console.log("Hi too, i am " +   this.name)
}

const person5 = new Person1("vlad1") 

console.log(person5)
console.log(Person1.prototype.isPrototypeOf(person5)), // =console.log(person5 instanceof Person1)
console.log(person5 instanceof Person1)


// цепочка наследованияЮ
 const Student = function(name, role){
    Person1.call(this, name)
    this.role = role

 }

Student.prototype =Object.create(Person1.prototype)
Student.prototype.construktor= Student
 const newStudent = new Student('Vladislav', "student")
 console.log(newStudent)