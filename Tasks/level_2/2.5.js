// 1. Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.

const str = '465464844';

const isNumber = str.split('').every(char => !isNaN(Number(char)));

console.log(isNumber); // Выведет: true (все символы — цифры)

// every — проверяет, удовлетворяют ли все элементы массива указанному условию.

/********************************************/

// 2. Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.

const str2 = '5/2';

const isFraction = str2.includes('/') &&
  str2.split('/').length === 2 &&
  str2.split('/').every(part => !isNaN(Number(part)));

console.log(isFraction); // Выведет: true

/********************************************/

// 3. Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.

const arr = [1, 3, 2, 6, 8, 6, 11];

function getSecondLargest(array) {
  const uniqueSorted = [...new Set(array)].sort((a, b) => b - a);
  return uniqueSorted.length > 1 ? uniqueSorted[1] : null; // Проверяем, есть ли второе число
}

console.log(getSecondLargest(arr)); // Выведет: 8

// 1. **`new Set(array)`** — удаляет дубликаты, создавая уникальный набор значений.
// 2. **`[...new Set(array)]`** — превращает набор обратно в массив.
// 3. **`.sort((a, b) => b - a)`** — сортирует массив в порядке убывания.
// 4. **`uniqueSorted[1]`** — возвращает второй элемент из отсортированного массива.
// 5. **Проверка `uniqueSorted.length > 1`** — чтобы избежать ошибок, если массив содержит меньше двух уникальных чисел.

/********************************************/

// 4. Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.

// способ 1

function f(min, max) {
    let res = [];
  
    for (let i = min; i <= max; i++) { // Используем <= вместо <
      res.push(i);
    }
  
    return res;
  }
  
  console.log(f(2, 12)); // Выведет: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// способ 2 

function f(min, max) {
    return Array.from({ length: max - min + 1 }, (_, i) => min + i);
  }
  
  console.log(f(2, 12)); // Выведет: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  
// Array.from({ length: max - min + 1 }) создаёт массив нужной длины.
// Второй аргумент функции (_, i) => min + i заполняет массив числами от min до max.

/********************************************/

// 5. Сделайте функцию, которая заполнит массив случайными латинскими буквами

function getRandomLetters(length) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]);
  }
  
  // Пример использования:
  const randomLetters = getRandomLetters(10); // Массив длиной 10
  console.log(randomLetters);
  