/* //* Сколько секунд осталось до завтра?
важность: 5
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

function getSecondsToTomorrow() {
    let now = new Date();
    let tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    
    let result = tommorow - now;

    return Math.round(result / 1000);
};

console.log( getSecondsToTomorrow() );