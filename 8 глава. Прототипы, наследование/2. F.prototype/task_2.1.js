/* Создайте новый объект с помощью уже существующего
важность: 5
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

 */

//пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает

function Right(message) {
    this.message = message
}
  
  let obj = new Right('hi');
  
  let obj2 = new obj.constructor('well done'); 
  console.log(obj2.message);

//пример функции-конструктора, с которой такой код поведёт себя неправильно.
function Wrong(message) {
    this.message = message;
};

Wrong.prototype = {};

let obj3 = new Wrong('buy')

let obj4 = new obj3.constructor(':(((');

console.log(obj4.message);