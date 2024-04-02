"use strict";
const books = [
  { id: 0, name: " Zero", author: "Ivanov", price: 1000 },
  { id: 1, name: "One", author: "Ivanov1", price: 1100 },
  { id: 2, name: "Two", author: "Ivanov2", price: 1200 },
  { id: 3, name: "Three", author: "Ivanov3", price: 1300 },
];

// const newArr = books.concat({
//   id: 5,
//   name: "Five",
//   author: "Ivanov5",
//   price: 1300,
// });
// console.log(newArr);
//
// books.splice(2, 3,  { id: 3, name: "Three", author: "Ivanov3", price: 1300 },
//,  { id: 3, name: "Three", author: "Ivanov3", price: 1300 },
//)
// console.log(books);

const newArr = books.slice(0, 3);
console.log(newArr);

let array1 = [1, 2, , 4, 5];

console.log(array1);
console.log(array1[2]);
array1[0] = "cat";
console.log(array1.length);
array1[10] = "dogt";
array1.length = 120; //länge bestimmen

let array = ["Apple", "Orange", "Banana"];

array.push("Kiwi", "Mango");
array.unshift("Papaya", "Strawberry");

array.pop("", "");
array.shift("");
console.log(array);
array.sort();
array.reverse();
console.log(array.join(", ")); // only console, doesnt change massiv

let obj = {
  name: "Alex",
  age: 23,
  isStudent: false,
};
for (let key in obj) {
  console.log("Ключ:" + key + " " + "Значение:" + obj[key]);
}

console.log(Object.keys(obj));

let array2 = [1, 2, 3, 4, "cat"];
for (let key of array2) {
  console.log(key);
}
for (let key in array2) {
  console.log(key);
}
console.log(array2);
delete array2[2];

const func = function (a, b, c) {
  console.log(a + b + c);
  console.log(arguments);
};
func(3, 6, 9);
