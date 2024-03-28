"use strict";

let a = 5;

function one1(c, d) {
  // lexicalEnvironment = {с :3, d: undefined}
  let a = 10;
  // lexicalEnvironment = {a:10, с :3, d: undefined}
  console.log(a, c, d);

  function two2() {
    // lexicalEnvironment = {leer}
    // Scope = {a:10} aber auch = {a:10, с :3, d: undefined} von den Eltern
    let a = 15;
    console.log(a);
  }
  two2();
}
one1(3);

let y = 5;
function one11(x) {
  console.log(x + y);
}
function two22() {
  let y = 15;
  one11(3);
}

one11(3);

//..замыкание  function in function
// function one(x) {
//   function two() {
//     const a = +prompt("введите число");
//     x--;
//     console.log(a);
//     console.log(x);
//     console.dir(two);

//     if (a !== x) {
//       two();
//     }
//   }
//   two();
// }

// one(10);

function pathGenerator(url) {
  return function (imageName) {
    return url + imageName;
  };
}

let uriToIcons = pathGenerator(
  "https://www.lifewire.com/copy-image-web-address-url-1174175/"
);
let uriToImages = pathGenerator(
  "https://www.lifewire.com/copy-image-web-address-url-1174175/"
);

console.log(uriToIcons("clock.svg"));
console.log(uriToImages("block.svg"));
