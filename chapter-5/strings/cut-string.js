'use strict';

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let cutStr = str.slice(0, maxlength - 1) + '…';
        return cutStr;
    } return str;
}

console.log( truncate("Всем привет!", 20) );
console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );