'use strict';
`Есть объект salaries с произвольным количеством свойств, 
содержащих заработные платы. Напишите функцию 
sumSalaries(salaries), которая возвращает сумму всех зарплат с 
помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.

с помощью перебора значений Object.values получить все значения
зарплат в переменную используя цикл фор.
В условиях цикла приплюсовать сумму.
вернуть значения суммы
Если значений нет, вернуть 0.
`
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  },
  salariesNull = {
  };

  function sumSalaries(salaries) {
    let sum = 0;
    
    for(let singlSalaries of Object.values(salaries)) {
        sum += singlSalaries;
    } return sum;
  }

  console.log(sumSalaries(salaries));
  console.log(sumSalaries(salariesNull));