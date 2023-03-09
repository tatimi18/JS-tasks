/* Сумма с произвольным количеством скобок
важность: 2
Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции. */

function sum(a) {
    let acc = a;
    function action(b) {
        acc += b;
        return action;
    };

    action.toString = function() {
        return acc;
    };

    return action;
};

console.log(JSON.parse(sum(1)(2)));

console.log(JSON.parse(sum(1)(2)(3))); // 1 + 2 + 3 == 6
console.log(JSON.parse(sum(5)(-1)(2))); //== 6
console.log(JSON.parse(sum(6)(-1)(-2)(-3))); //== 0
console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5))); //== 15