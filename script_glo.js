"use strict";



const worker = {
workplace:1,
dinner:1,
goToWork: function(){
    console.log("i am going to work")
},
leaveWork: function(){
    console.log("i am going to home")
},
work: function(){
    console.log("i am working")
},
say: function(){
console.log("Hallo, my name is " + this.name)
}
}



console.log(worker)

const frontEndDev = Object.create(worker)
const backEndDev = Object.create(worker)

frontEndDev.role = "Front End Developer"
backEndDev.role = "Back End Developer"

frontEndDev.dinner = 2
frontEndDev.work()
backEndDev.work()


frontEndDev.work = function(){
    console.log("i write a good front and eat cockies")
}

backEndDev.work = function(){
    console.log("i work with dates, please give me a day off")
}

const developer1 = Object.create(frontEndDev)
const developer2 = Object.create(frontEndDev)
const developer3 = Object.create(backEndDev)
const developer4 = Object.create(backEndDev)

developer1.name = "Olja1_front"
developer2.name = "Kolja2_front"
developer3.name = "Petja3_back"
developer4.name = "Mitja4_back"

developer1.say()
developer2.say()
developer3.say()
developer4.say()

console.log(frontEndDev)
console.log(backEndDev)
console.log(developer1)
console.log(developer2)
console.log(developer3)
console.log(developer4)

console.log(developer1.hasOwnProperty('name'));// абсолютно игнорирует пропотипы
console.log(developer1.hasOwnProperty('role'));
console.log(developer1.__proto__.hasOwnProperty('role'));
console.log(developer1.hasOwnProperty('workplace'));
console.log(developer1.__proto__.__proto__.hasOwnProperty('workplace'));

console.log(frontEndDev.isPrototypeOf(developer1))
console.log(frontEndDev.isPrototypeOf(developer3))




let arr =[1, 2, 3, 4, 5]
console.log(arr)
console.log(arr.join("q h"))
console.log(arr.toString())
console.log(arr.__proto__)
console.log(Array.prototype)
console.log(arr.__proto__ === Array.prototype)

const man ={
hands:2,
legs:2,
eyes:2,
walk:function(){
    console.log("i am walking")
},
talk: function(){
    console.log("i am talking")
}
}

const newMan = Object.create(man)
const newWoman = Object.create(man)
newMan.walk()
newMan.talk()
newMan.name = "Alex"
newMan.age = 23

newWoman.name = "Katja"
newWoman.age = 20

console.log(newMan)
console.log(newWoman)
