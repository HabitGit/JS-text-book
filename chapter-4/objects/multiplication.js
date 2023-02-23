'use strict';

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
     for (let count in obj) {
        if (+obj[count]) {
            obj[count] *= 2;
        }
    } return obj
}

console.log( multiplyNumeric( menu ) );