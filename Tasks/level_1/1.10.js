// 1. Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

// способ 1

const arr = ['1', 2, 'a', '34'];

for (let i = arr.length - 1; i >= 0; i--) {
    arr.splice(i, 0, arr[i]);
}

console.log(arr);

// способ 2

const arr1 = ['1', 2, 'a', '34'];
const result1 = arr1.flatMap(el => [el, el]);
console.log(result1);

// способ 3

const arr2 = ['1', 2, 'a', '34'];
const result2 = arr2.reduce((acc, el) => acc.concat([el, el]), []);
console.log(result2);

/********************************************/

// 2. Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

// способ 1

const arr3 = [3, 7, 23, 44, 52, 68]

const num1 = 3;

const newArr = []

for( const n of arr3){
    if( n % num1 === 0){
        newArr.push(n)
    }
}

console.log(newArr)

// способ 2

const arr4 = [3, 7, 23, 44, 52, 68];
const num = 2;

const filteredArr = arr4.filter(item => item % num === 0);

console.log(filteredArr); // [44, 52, 68]

/********************************************/

// 3. Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

const num2 = 1234556;
const num3 = 567890;

// Преобразуем числа в массивы цифр
const digits1 = String(num2).split('');
const digits2 = String(num3).split('');

// Находим пересечение массивов
const commonDigits = digits1.filter(digit => digits2.includes(digit));

console.log(commonDigits)

// Убираем дубликаты, если они есть
const uniqueCommonDigits = [...new Set(commonDigits)];

console.log(uniqueCommonDigits); // ['5', '6']

/********************************************/

// 4. Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

const num4 = 534536445;

const arr5 = [];
let count = 0; // Счётчик индексов начинается с 0

// Цикл проходит по каждой цифре числа, преобразованного в строку
for (let n of num4.toString()) {
    if (n === '3') {
        arr5.push(count); // Сохраняем индекс всех найденных '3'
    }
    count++;
}

// Исключаем первую и последнюю позиции
const result = arr5.slice(1, -1);

console.log(result); // Вывод позиций всех "3", кроме первой и последней

/********************************************/

// 5. Дан массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Слейте элементы этого массива в один одномерный массив:

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// способ 1

const arr6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const flattened2 = arr6.flat();

console.log(flattened); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// способ 2

const arr7 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const flattened3 = arr7.reduce((acc, subArray) => acc.concat(subArray), []);

console.log(flattened); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// способ 3

const arr8 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const flattened = [];
for (const subArray of arr) {
    flattened.push(...subArray);
}

console.log(flattened); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


