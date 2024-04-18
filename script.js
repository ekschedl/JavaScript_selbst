

"use strict"
// const text =document.getElementById('text')
// console.log(text);

// // text.textContent =text.textContent.replace(/Lorem/gi, "лорем")


// text.innerHTML = text.innerHTML.replace(/<span>[\w\s]+<\/span>/gi, (str) => {
//     return `<strong>${str}</strong>`;
//   });
  



// работа с формой
const textInput =document.getElementById("text")
const numberInput =document.getElementById("number")
const formInput =document.getElementById("form")


// //
// textInput.addEventListener('input', (e) => {
//     e.target.value= e.target.value.replace(/\d+/, "" )
//     console.log(e.target.value);
//    // console.log(e.target.value.replace(/\d+/, "" ));// запретили вводить цифры
// })
// numberInput.addEventListener('input', (e) => {
//     e.target.value= e.target.value.replace(/\D+/, "" )
//     console.log(e.target.value);
//     //e.target.value= e.target.value.replace(/\D+/, "" )// запретили вводить буквы и англ е
// })
// console.log(textInput);

formInput.addEventListener('submit', (e) => {
    e.preventDefault()
    let isError = false

    if(!/[^а-яА-Я]/g.test(textInput.value) && textInput.value !== "") {
        alert("в инпуте только кирилица")
    } else {isError = true}
       
    if(!/[^\d]/g.test(numberInput.value)  && numberInput.value !== "") {
        alert("в инпуте только числа")
    }else {isError = true}
 

    if (!isError){
    alert("данные отправлены")
    }
})