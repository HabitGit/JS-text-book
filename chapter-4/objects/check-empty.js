'use strict';

let schedule = {};

function isEmpty(obj) {
    for (let i in obj) {
        return false;
    }
    return true;
}

console.log( isEmpty(schedule) );