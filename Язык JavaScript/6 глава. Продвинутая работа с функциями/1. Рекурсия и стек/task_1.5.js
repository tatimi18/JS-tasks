/* Вывод односвязного списка в обратном порядке
важность: 5
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.

 */

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

function printReverseList(list) {
    let arr = [];
    let now = list
    while (now) {
        arr.push(now.value);
        now = now.next;
    };
    arr.reverse();
    for (val of arr) {
        console.log(val)
    }
};

console.log(printReverseList(list));

function printReverseList1(list) {
    if (list.next) {
        printReverseList1(list.next);
    };
    console.log(list.value);
};

console.log(printReverseList1(list));