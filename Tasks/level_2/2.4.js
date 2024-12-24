// 1. Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.

function fun(num) {
    let res = 0;

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            res += 2; // Учитываем оба делителя: i и num / i
            if (i === num / i) {
                res--; // Если делители совпадают
            }
        }
    }

    console.log(res);
}

fun(1000000000); // Вызов функции

// 2. Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

function isPrime(num) {
    if (num < 2) {
        return false; // Простые числа начинаются с 2
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Если число делится на i, оно составное
        }
    }

    return true; // Если не нашли делителей, число простое
}

// Пример использования
console.log(isPrime(2));  // true (простое)
console.log(isPrime(10)); // false (составное)
console.log(isPrime(17)); // true (простое)
console.log(isPrime(1));  // false (1 не является простым)
console.log(isPrime(0));  // false (0 не является простым)
