'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
  };
console.log(user);

let json = JSON.stringify(user);
console.log(json);

let output = JSON.parse(json);
console.log(output);