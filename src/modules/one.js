const oneModule = () => {
  console.log(window)

  
// window.setTimeout(() => {
//   console.log('hello,  i am  setTimeout')
// },  2000)

// // oder
// const logger = () => {
//   console.log('hello,  i am  setTimeout too');
// }
//  let setTimeout1 = setTimeout(logger, 4000)


//  //oder 
//  const logger2 = (str) => {
//   console.log(`hello,  i am  ${str} too too`);
// }
// // и здесь нужна обертка
//  setTimeout(() => {
// logger2('setTimeout')
//  }, 6000)

//  clearTimeout(setTimeout1) // очистили setTimeout1 

//  let setInterval1 =  setInterval(() => {
//   logger2('setInterval')
//    }, 6000)  //первый интервал сработает через 6 сек и будет каждый 6 сек повторяться


// clearInterval(setInterval1) // сразу очистили setInterval1


// // Beispiel 3

// let count = 0

//  const logger3 = (str) => {
//   console.log(`hello,  i am  ${str} from beispiel 3`);
// }

//  let setInterval3 =  setInterval(() => {
//   count++
//   logger3('setInterval')
//   if (count === 3) clearInterval(setInterval3)
//    }, 500)  


   

  // Beispiel 4 

let active = false
let idTimeout

document.addEventListener('click', () => {
//   if (active) {
//     active = false
// } else {
//   active = true
// } 
// man kann einfacher schreiebn:
active = !active
logger4('setTimeout')
})


const logger4 = (str) => {
if(active) {
  console.log(`hello,  i am  ${str} from beispiel 4`);
  idTimeout =setTimeout(() => {
logger4('setTimeout')
  }, 500)
} else {
  clearInterval(idTimeout) 
}
 }


  
  
};

  export default oneModule;