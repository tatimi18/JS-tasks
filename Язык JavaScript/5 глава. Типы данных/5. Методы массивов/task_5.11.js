/* //* Получить средний возраст
важность: 4
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28 */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
    let ages = users.map(item => item.age);
    let sumAges = 0;

    for (let i = 0; i < ages.length; i += 1) {
        sumAges += ages[i];
    };
    return sumAges / ages.length;
    //return users.reduce((prev, user) => prev + user.age, 0) / users.length; //2-й вариант
};

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28 

