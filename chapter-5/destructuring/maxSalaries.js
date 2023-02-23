'use strict';

`Функция возвращает имя самого высокооплачиваемого сотрудника
 если список пустой вернуть null
 если несколько сотрудников вернуть обоих
 использовать Object.entries и деструкрурирование`
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries) {

    let maxSal = 0
       ,nameMax = null;

       for (let [name, salary] of Object.entries(salaries)) {
        if ( maxSal < salary ) {
            maxSal = salary;
            nameMax = name;
        }
       }
       return nameMax;
  }

console.log( topSalary(salaries) );