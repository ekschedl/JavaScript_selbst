"use strict";

// символьный  классы
// \d  ознеачает любую цифру
// \w    нижнее подчеривание цифра или латинская буква
// \s k любой пробельный символ /  перенос строки или табуляция пробел
// их братья классы;
// \D  ознеачает любой символ кроме \d / все что не является цифро1
// \W  все кроме  \w
// \S все кроме \s 
// .  - все кроме \n переноса строки
const phone='8 (017) 444 - 55 - 66c'
console.log(phone.match(/\d/))
console.log(phone.match(/\d/g))
console.log(phone.match(/\d/g).join(''))

console.log(phone.match(/\w/g).join(''))
console.log(phone.replace(/\D/g, "*"))

// якоря
// ^ - означает начало строки
// $ - означает конец строки
// \b  ознеачает границу слова
const date ='18 may 1983'
console.log(date.match(/18/g))
console.log(date.match(/\d\d/g))
console.log(date.match(/^\d\d/g))
console.log(date.match(/\d\d$/g))
console.log(date.match(/\b\d\d/g))
console.log(date.match(/\d\d\b/g))

// наборы
const string =' дедушка  и девушка'
console.log(string.match(/дедушка/g))
console.log(string.match(/де[д, в]ушка/g))

// диапазоны

console.log(string.match(/де[а-я]ушка/g))
console.log(string.match(/де[А-Я]ушка/g))
console.log(string.match(/де[А-Я]ушка/gi))
console.log(string.match(/де[a-z]ушка/gi))
console.log(string.match(/де[a-zA-Z0-9]ушка/gi))
console.log(string.match(/де[^a-zA-Z0-9]ушка/gi)) // ^ каретка означает здесь отрицания внутри диапазонов групп и наборов

const string2 =' де^ушка  и девушка'
console.log(string2.match(/де[\^]ушка/gi)); // более удобно на практике
const regString = new RegExp("де[\^]ушка", "gi") // строка  сьедает инкранирование
console.log(string2.match(regString)); 

const regString2 = new RegExp("де[\\^]ушка", "gi") // строка  сьедает инкранирование
console.log(string2.match(regString2)); 



// Квантификаторы
const string3 =' депдушка  и девушка'
console.log(string3.match(/[а-я]{2,4}[дв][а-я]{4}/gi));  // {4}, {2, 5} - Квантификаторы
console.log(string3.match(/[а-я]{3}[дв][а-я]{4}/gi)); 

// короткая запись Квантификаторов=
// {1,}   или +  /от 1 до бесконечности
console.log(string3.match(/[а-я]+[дв][а-я]+/gi));

// {0,}   или * /от 0 до бесконечности
const string4 ='душка  и девушка'
console.log(string4.match(/[а-я]{0,}[дв][а-я]{0,}/gi));
console.log(string4.match(/[а-я]*[дв][а-я]*/gi));

// {0,1}   или ? /от 0 до 1 делает символ необязательным / он может быть а может и не быть




// Скобачные группы
const string5 ='gooogle.com'
console.log(string5.match(/[a-z]+\.[a-z]+/gi));
console.log(string5.match(/[\w]+\.[\w]+/gi));

const string6 ='gooogle.com site.site.google.com'
console.log(string6.match(/([\w]+\.)+[\w]+/gi));




const string7 =' Это мой test-kaak@google.com'
console.log(string7.match(/[\.\-\w]+@([\w]+\.)[\w]+/gi));  // готовая проверка (но не самое лучшее)на эмейл адрес
let testEmail =/(([\.\-\w]+)(@)([\w]+\.)+([\w]+))/gi
console.log(testEmail.test(string7));

// const result = string7.replace(testEmail, "email")
// console.log(result);

const result = string7.replace(testEmail, (str, $1, $2, $3, $4, $5, $6) => {
    console.log($1);// даст ([\.\-\w]+) из let testEmail =/([\.\-\w]+)@([\w]+\.)[\w]+/gi
    console.log($2);// даст ([\w]+\.) из let testEmail =/([\.\-\w]+)@([\w]+\.)[\w]+/gi
    console.log($3);// даст ([\w]+)из let testEmail =//([\.\-\w]+)@([\w]+\.)+([\w]+)/gi
    console.log($4);// даст(@)  из let testEmail =//([\.\-\w]+)(@)([\w]+\.)+([\w]+)/gi
    console.log($5);// (([\.\-\w]+)(@)([\w]+\.)+([\w]+))
   
    return "email " + str
    return"email " + `${$1}${$2}${$3}${$4}${$5}`
})
console.log(result);


