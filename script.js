"use strict"

const textBlock =document.querySelector(".text-block")

const addBtn=document.getElementById("add-btn")
const btnsBlock= document.querySelector(".buttons-block")
const main =document.querySelector("main")
let buttons =document.querySelectorAll(".btn")

const changeText = (text) =>{
textBlock.textContent=text
}

const getNewButton = () =>{
    const newBtn= buttons[0].cloneNode()
    newBtn.textContent = buttons.length + 1 >= 10 ?
        buttons.length +1 : `0${buttons.length  + 1}`
        btnsBlock.append(newBtn)

        buttons =document.querySelectorAll(".btn")
    console.log(newBtn);
}
main.addEventListener('click', (event) => {
 // можно использовать это свойство:
//    if(!event.target.classList.contains("btn")) {
//         return
//     }
// можно еще так 
    // if(!event.target.matches("button.btn")) {
    //     return
    // }
    if(event.target.matches("button") && event.target.closest(".buttons-block")) { // часто пригодиться на практике  и выручитб надо запомнить
        
    changeText(event.target.textContent)
    } else if(event.target.id ==='add-btn'){
        getNewButton()
    }


   
})
// + делигирования при  повторении элементов- висит на родителе / блоке с одинаковыми элементами

    // не надо _  