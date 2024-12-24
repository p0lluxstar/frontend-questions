// 1. Сделайте функцию, которая вернет текущий день недели словом.

const daysOfWeek = [
    "Воскресенье", // 0
    "Понедельник", // 1
    "Вторник",     // 2
    "Среда",       // 3
    "Четверг",     // 4
    "Пятница",     // 5
    "Суббота"      // 6
];

function returnDay (days) {
    const day = new Date().getDay()
    return days[day]
}

returnDay(daysOfWeek)

/********************************************/

// 2. Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function secondsToDays(seconds) {
    const secondsInADay = 86400; // Количество секунд в одном дне (24 * 60 * 60)
    return seconds / secondsInADay; // Делим общее количество секунд на количество секунд в дне
}

// Пример использования:
console.log(secondsToDays(86400)); // 1 (одни сутки)
console.log(secondsToDays(172800)); // 2 (два дня)
console.log(secondsToDays(90000)); // 1.041666... (чуть больше суток)

/********************************************/

// 3. Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

function truncateString(length, str) {
    if (typeof str !== "string") {
      throw new Error("Второй параметр должен быть строкой");
    }
    if (typeof length !== "number" || length < 0) {
      throw new Error("Первый параметр должен быть положительным числом");
    }
    return str.length > length ? str.slice(0, length) : str;
  }
  
  // Пример использования
  console.log(truncateString(5, "Привет, мир!")); // "Приве"
  console.log(truncateString(10, "Hello"));       // "Hello"
  console.log(truncateString(0, "Test"));         // ""
  
/********************************************/

// 4. Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

// способ 1

function getSumOfDivisorsWhile(num) {
    if (num <= 0) {
        throw new Error("Число должно быть положительным");
    }

    let divisor = 1;
    let sum = 0;

    while (divisor <= num) {
        if (num % divisor === 0) {
            sum += divisor;
        }
        divisor++;
    }

    return sum;
}

// Пример использования
console.log(getSumOfDivisorsWhile(84)); // 224


// способ 2. Рекурсия

function f(num, divisor = 1, res = 0) {
    if (divisor > num) {
        console.log(res);
        return res;
    }

    if (num % divisor === 0) {
        res += divisor;
    }

    return f(num, ++divisor, res); // Увеличиваем divisor на 1
}

f(84); // 224
