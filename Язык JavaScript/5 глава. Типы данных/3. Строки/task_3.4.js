/* //* Выделить число
важность: 4
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true */

function extractCurrencyValue(str) {
    return Number( str.slice(1) );
};

console.log( extractCurrencyValue('$120') === 120 ); // true
console.log( extractCurrencyValue('$350') ); // 350
console.log( extractCurrencyValue('$3192') ); // 3192


