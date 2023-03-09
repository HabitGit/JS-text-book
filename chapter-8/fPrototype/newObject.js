'use strict';

function Object(something) {
    this.name = something;
}

let obj = new Object('Name');
let obj2 = new obj.constructor('Name2');

console.log(obj.name);
console.log(obj2.name);

// Не работающий вариант с перезаписанным prototype

function Object2(something) {
    this.name = something;
}

Object2.prototype = {};

let object = new Object2('user');
let object2 = new object.constructor('user2');

console.log(object2.name);