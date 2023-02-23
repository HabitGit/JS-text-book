'use strict';

let array = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
    let maxSum = 0
       ,partialSum = 0;

       for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
       }

       return maxSum;
}

getMaxSubSum(array);