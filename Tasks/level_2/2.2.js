// 1. Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

// способ 1

function f(num){
    const res = num.toString().split('').reduce((acc, item) => acc += Number(item), 0)
    console.log(res)
}

f(1568)

// способ 2

function f(num){

    let res = 0;

    for (let value of num.toString()){
        res += parseInt(value)
    }

    console.log(res)
}

f(1568)

/********************************************/

// 2. Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

function fun(num) {
    let res = '';

    // Пробегаем по каждой цифре числа и добавляем ее, если это не '0'
    for (let value of num.toString()) {
        if (value !== '0') {
            res += value;
        }
    }

    // Конвертируем строку обратно в число
    console.log(Number(res)); // Вернет число без нулей
}

fun(1012600); // 1126

/********************************************/

// 3. Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

function fun() {
    const today = new Date(); // Сохраняем текущую дату
    const year = today.getFullYear(); // Текущий год
    const month = today.getMonth(); // Текущий месяц (с 0)

    // Получаем количество дней в текущем месяце
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Месяцы начинаются с 0
    const currentDay = today.getDate(); // Текущий день месяца

    // Возвращаем количество дней до конца месяца
    console.log(daysInMonth - currentDay);
}

fun();

/********************************************/

// 4. Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:

const daysOfWeek = [
    "Воскресенье", // 0
    "Понедельник", // 1
    "Вторник",     // 2
    "Среда",       // 3
    "Четверг",     // 4
    "Пятница",     // 5
    "Суббота"      // 6
];

function getAdjacentDays() {
    const today = new Date().getDay(); // Получаем текущий день недели (0 - 6)
    
    // Получаем индексы предыдущего, текущего и следующего дня
    const prevDay = (today === 0) ? 6 : today - 1; // Если сегодня воскресенье, то предыдущий день — суббота
    const nextDay = (today === 6) ? 0 : today + 1; // Если сегодня суббота, то следующий день — воскресенье
    
    // Формируем объект с днями недели
    return {
        next: daysOfWeek[nextDay],
        curr: daysOfWeek[today],
        prev: daysOfWeek[prevDay]
    };
}

console.log(getAdjacentDays());
