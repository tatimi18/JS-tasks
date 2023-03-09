/* Вывод каждую секунду
важность: 5
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
 */

function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
          clearInterval(timerId);
        };
        current++;
    }, 1000);
};

//console.log(printNumbers(1, 5));

function printNumbers1(from, to) {
    let current = from;
    
    let timerId = setTimeout( function print() {
        console.log(current);
        timerId = setTimeout(print, 1000);
        if (current == to) {
            clearTimeout(timerId);
        };
        current++;

    }, 1000 );
};

console.log(printNumbers1(10, 15));

