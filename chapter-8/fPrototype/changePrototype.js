'use strict';

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// Rabbit.prototype = {}; // true
// Rabbit.prototype.eats = false; // false
// delete rabbit.eats; // true Здесь delete rabbit.eats пытается удалить свойство eats из объекта rabbit, но его там нет. Таким образом, просто ничего не произойдёт.
delete Rabbit.prototype.eats; // undef Свойство eats удалено из прототипа, оно больше не существует.

console.log( rabbit.eats ); // true