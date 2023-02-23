'use strict';

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function count(obj) {

    let i = 0
       ,array = [];

    for( let count of Object.values(obj)) {
        array.push(count);
    } return array.length;
}

console.log(count(salaries));

`OR:`

function count2(obj) {
    return Object.keys(obj).length;
  }