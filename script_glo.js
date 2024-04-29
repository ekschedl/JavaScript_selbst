"use strict";
const getData = () => {
  return fetch("./db/users.json").then((res) => res.json());
};
getGata().then((users) => {
  console.log(users);
});
