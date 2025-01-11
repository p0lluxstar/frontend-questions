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

/********************************************/

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

/********************************************/

// 3. Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

function fun(num){
    return Number(String(num).split('').filter( el => Number(el) % 2 !== 0).join(''))
    
  }
  
  fun(14567432465)

/********************************************/

// 4. Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

function fillArrayWithRandomNumbers(n, min, max) {
    const result = [];

    for (let i = 0; i < n; i++) {
        // Генерация случайного числа в диапазоне [min, max]
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        result.push(randomNum);
    }

    return result;
}

// Пример использования:
console.log(fillArrayWithRandomNumbers(5, 1, 100)); // Например: [45, 23, 67, 89, 10]
console.log(fillArrayWithRandomNumbers(10, -50, 50)); // Например: [-20, 15, 0, -3, 49, ...]
