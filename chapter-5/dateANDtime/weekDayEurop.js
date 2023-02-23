'use strict';

function getLocalDay(date) {
    let dateRu = [7, 1, 2, 3, 4, 5, 6];

    return dateRu[date.getDay()];
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );  