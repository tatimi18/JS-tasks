/* //* Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно. */

function camelize(str) {

    let arr = str.split('');

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].includes('-')) {
            arr.splice(i, 1);
            arr.splice(i, 1, arr[i].toUpperCase());
            str = arr.join('')
        };
    };
    return str;
};

console.log( camelize("background-color"));
console.log( camelize("list-style-image"));
console.log( camelize("-webkit-transition"));


