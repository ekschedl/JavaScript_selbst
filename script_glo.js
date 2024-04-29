"use strict";
// const getData = () => {
//   return fetch("./db/users.json").then((res) => res.json());
// };
// getData().then((users) => {
//   console.log(users);
//   const userId0 = users[0].id;

//   fetch(`./db/${userId0}.json`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
//   const userId2 = users[1].id;

//   fetch(`./db/${userId2}.json`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// });

const getData = async () => {
  return "Alex";
};
console.log(getData());
getData().then((data) => console.log(data));
getData();

const getData1 = async (id) => {
  try {
    const responseUsers = await fetch("./db/users.json");
    const users = await responseUsers.json();

    if (users.length < id + 1) {
      throw new Error("Массив users слишком короткий");
    }

    const responseUser = await fetch(`./db/${users[id].id}.json`);
    return await responseUser.json();
  } catch (error) {
    throw new Error(error.message);
    // throw new Error("Какая-то ошибка");
  }
};

getData1(5)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

const img = document.querySelector("img");

try {
  img.addEventListener("click", () => {
    alert("Click");
  });
} catch (error) {
  console.log(error.message);
}
console.log("дальше работает- try catch  ошибку отработал и код идет дальше");
