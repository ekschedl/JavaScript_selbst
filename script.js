"use strict";

//асинхронный код
console.log(1);
setTimeout(() =>{
    console.log(2);
}, 2000)

setTimeout(() =>{
    console.log(4);
}, 1000)




//promise / resulte в случае успехаб reject  в случае неудачи отрабатывае
const promise = (num)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
        
            if(num>10){
                resolve(num)
             } else {
                reject("Some error")
             }
        }, 2000)
        })
}

promise(15)
//    // then срабатывает  при     resolve
//    .then((data) => data +10)
//    .then((newData) => {
//         console.log(newData);
// })
//    // catch vtnод для перехватат ошибок
//    .catch((errorMess) => console.log(errorMess))
// //    .finally(()=> console.log("finaly"))

//___
// .then((data) => {
//     console.log(data);
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         resolve(data+10)
//         }, 2000)
//     })
// })
// .then((data)=> {
// console.log(data);
// })
// .catch((errorMess) => console.log(errorMess))
//________


//Example2
const promise2 = (num)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
        
            if(num>10){
                resolve(num)
             } else {
                reject(num)
             }
        }, 2000)
        })
}

const one=promise2(5)
const two=promise2(25)
const three=promise2(35)
Promise.all([one, two, three])
.then((data)=>{
    console.log(data);
})
.catch(error => console.log(error))