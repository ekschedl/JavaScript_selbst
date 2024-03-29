"use strickt";
let key = "city";
let city = "Minsk";

let person = {
  name: "Alex",
  age: 33,
  say: function (str) {
    console.log(str);
  },
};

//let job = new Object();
//job.position = "Developer";

let job = {
  position: " middle Developer",
  job: {
    salary: 1000000,
    position: "senior developer",
  },
};

person.job = job;
person.job.position = "senior developer";

// person.say = function (str) {
//   console.log(str);
// };

person.say("hello world");
person[key] = city;
console.log(person);
console.log(job);
console.log(person.age);
console.log(person["age"]);
console.log(person.job === job);
