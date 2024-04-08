// localStorage['name'] = 'Alex'
// man kann auch so schreiebn
// localStorage.name = 'Alex'
// console.log(localStorage.name)


//bei localStorage gibt es bestimmte Methode:

//setItem
localStorage.setItem('name', 'Alex')
console.log(localStorage.getItem('name'))
localStorage.removeItem('name')
//es gibt noch einen method localstorage.clear -  чистит авсболютно все свойста
//localStorage.clear()
console.log(localStorage.getItem('name'))
const input = document.getElementById('input')
const btnSave = document.getElementById('btn_save')
const btnRemove= document.getElementById('btn_remove')
const text = document.getElementById('text')

console.log(input)
console.log(btnSave)
console.log(btnRemove)
console.log(text)


const showText = function(){
    //text.textContent = "Привет, localStorage!"
    text.textContent = sessionStorage.getItem('text')
}

btnSave.addEventListener('click', function() {
    sessionStorage.setItem('text', input.value)
    showText()

})
showText()

//localStorage speichert die Daten für Immmer
//sessionStorage speicher nur für eine session, те  пока мы не закроем вкладку
btnRemove.addEventListener('click', function(){
   localStorage.clear()
   sessionStorage.clear()
   showText()
})
showText()



// вот в  таком формате принимает max-age=
//document.cookie = "name=Alex; max-age=3600"

// или вот в  таком формате принимает expires
//document.cookie = "name=Alex; expires=Tue, 19 Jan 2028 03:12:13 GMT"; 
// вот как можно прийти к формату expires:
let date = new Date(2028, 4, 18, 9, 20, 0)// если в аргументах  date не указывать никакую дату -выдаст текущую
    console.log(date.toUTCString()) // чтобы  передать в формате GMT
    document.cookie = 'name=Alex; expires=' + date.toUTCString();


    const user = {
        name:'alex',
        city: 'Minsk'
    }

    document.cookie = 'user=' +JSON.stringify(user)
