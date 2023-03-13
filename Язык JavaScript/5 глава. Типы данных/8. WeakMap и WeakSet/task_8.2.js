/* //* Хранение времени прочтения
важность: 5
Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.

 */

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];
  
let timeReaded = new WeakMap();


timeReaded.set(messages[0], new Date());
timeReaded.set(messages[1], new Date());
timeReaded.set(messages[2], new Date());





console.log("Когда прочитали первое сообщение?:", timeReaded.get(messages[0]));
console.log("Когда прочитали второе сообщение?:", timeReaded.get(messages[1]));
console.log("Когда прочитали третье сообщение?:", timeReaded.get(messages[2]));