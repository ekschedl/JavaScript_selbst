"use strict";

const user ={
    name: 'Alex',
    age: 18,
    isAdult: false,
    projects: {
        firstProject: 'firstProject',
        secondProject: 'secondProject',
    }
}

// const name = user.name
// const age = user.age
// const isAdult = user.isAdult
// выполним тоже самое  но только через деструктуризацию

const {name: nameUser, age, isAdult, projects, projects:{firstProject, secondProject}} = user;

console.log(nameUser);
console.log(age);
console.log(isAdult);
console.log(user.name);
console.log(secondProject);
console.log(firstProject)


// пример 2
const names = ['katja', 'olija', 'andrey', ['tanja', 'luda']]
const katja = names[0]
const olija = names[1]
console.log(katja);
console.log(olija);
// упрощаем через деструктуризацию
const [katja1, olja, andrey, [tanja, luda]] = names

console.log(katja1);
console.log(olja);
console.log(andrey);
console.log(tanja);
console.log(luda);

// пример 3
const logger = (first, second, third) => {
    console.log(`${first} ${second} ${third}`)
}
logger ('i', 'love', 'you')

const logger2 = (obj) => {
    const {first, second, third} = obj
    console.log(first)
}
// logger ('i', 'love', 'you')
logger2({first:'i', second: 'love', third:'you'})

