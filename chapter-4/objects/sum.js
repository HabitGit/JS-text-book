'use strict';

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

let salaries = {
  }

function countSumSalaries(salaries) {
    let sum = 0;
    for (let count in salaries) {
        sum += salaries[count];
    }
    return sum;
}

console.log( countSumSalaries( salaries ) );