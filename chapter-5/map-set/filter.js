'use strict';

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    let uniqueSet = new Set(arr)
       ,newValues = [];
    newValues = Array.from(uniqueSet);
    return newValues;
}

console.log(unique(values));