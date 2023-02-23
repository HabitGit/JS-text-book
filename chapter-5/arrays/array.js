'use strict';

let styles = ['Джаз', 'Блюз']
   ,center;
console.log('create: ' + styles);

styles.push('Рок-н-ролл');
console.log('Push: ' + styles);

center = Math.floor(styles.length - 1) / 2;
styles[center] = 'Классика';
console.log('Замена центра: ' + styles);

console.log('Вывод удаляемого элемента: ' + styles.shift());
console.log('Вывод без удаленного значения: ' + styles);

styles.unshift('Рэп', 'Регги');
console.log('Вывод с новыми элементами: ' + styles);