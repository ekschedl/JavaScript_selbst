

"use sctrict"
const regexp1= new RegExp("hallo", "g") 
// g означает искать глобально по всей строке не только первое совпадение искать / найдет все совпадения

const regexp2 = /hallo too/g
const str = "hallo people and hallo all animals hallo"

// console.log(regexp1.test(str))
// console.log(regexp1.exec(str))
// console.log(regexp1.exec(str))
// console.log(regexp1.exec(str))
// console.log(regexp1.exec(str))
// console.log(regexp1.exec(str))
// console.log(regexp1.exec(str))
// console.log(regexp1.exec(str))
// console.log(regexp1.exec(str))// по кругу идет

// console.dir(regexp1)
// console.dir(regexp2)
// console.dir(typeof regexp1)
// console.dir(typeof regexp2)

let reg
const arr = []
reg = regexp1.exec(str)
while(reg) {
    console.log(reg)
    arr.push(reg[0])
    reg= regexp1.exec(str)
  
}
console.log(arr)
// test тоже идет по кругу
console.log(regexp1.test(str))
console.log(regexp1.test(str))
console.log(regexp1.test(str))
console.log(regexp1.test(str))
console.log(regexp1.test(str))

// региcтр gi позводяет игнорировать регистр /часто на практике так используется
const regexp3= new RegExp("Рallo", "gi") 
// g означает искать глобально по всей строке не только первое совпадение искать / найдет все совпадения
const regexp4 = /hallo too/gi
const str34 = "hallo people and hallo all animals hallo"
console.log(regexp3.test(str))
console.log(regexp3.test(str))
console.log(regexp3.test(str))
console.log(regexp3.test(str))
console.log(regexp3.test(str))


// пример 5
const regexp5 = /hallo/gi
const str5 = "hallo people and hallo all animals hallo"
console.log(regexp5.test(str))
console.log(regexp5.test(str))
console.log(regexp5.test(str))
console.log(regexp5.test(str))

console.log(/hallo/gi.test(str))
console.log(/hallo/gi.test(str))
console.log(/hallo/gi.test(str))
console.log(/hallo/gi.test(str))

// пример 6 из практики
const str6 = "ek.schedl@yahoo.com"
console.log(/@/gi.test(str6))

// пример 7 со стороками
const str7 = "hallo people and hallo all animals Hallo"
console.log(str.search(/hello/)) // если не найдет ваыдает -1
console.log(str.search(/hallo/)) // вернет индекс начала данного сопадения здесь 0
console.log(str.match(/hallo/i)) // 
console.log(str.match(/hallo/gi)) // 
console.log(str.match(/hallo/g)) //

console.log(str.replace(/hallo/, "привет")) // замениться только первое 
console.log(str.replace(/hallo/gi, "привет")) // заменятся все найденные элементы
console.log(str.replace(/hallo/gi, ""))  // удалит все  совпадения
console.log(str.replace(/hallo/, ""))  // удалит только первое  совпадение
