'use strict';
`Было ли сообщение прочитанно?
когда сообщение удаляется из массива оно так же исчезает из 
структуры данных`

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let weakeSet = new WeakSet();

  weakeSet.add(messages[0]);