/* Поиск элементов
важность: 4
Вот документ с таблицей и формой.

Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

 */
//Таблицу с id="age-table".
let table = document.getElementById('age-table');

//Все элементы label внутри этой таблицы (их три).
table.getElementsByTagName('label');

//Первый td в этой таблице (со словом «Age»).
table.rows[0].cells[0];

//Форму form с именем name="search".
let form = document.getElementsByName('search')[0];

//Первый input в этой форме.
form.querySelector('input')


//Последний input в этой форме.
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]

