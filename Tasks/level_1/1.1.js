/* 1. Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию. */

function isDigitsAscending(number) {
    const numStr = number.toString(); // Преобразуем число в строку

    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] <= numStr[i - 1]) { // Проверяем, что текущая цифра больше предыдущей
            return false; // Если не больше, возвращаем false
        }
    }
    return true; // Все цифры в порядке возрастания
}

// Примеры использования
console.log(isDigitsAscending(12345)); // true
console.log(isDigitsAscending(12341)); // false
console.log(isDigitsAscending(1357));  // true
console.log(isDigitsAscending(9876));  // false

/****************************************************************************************/

/* 2. Удалите из массива все пустые строки [1, '', 2, 3, '', 5]; */

// способ 1 

const array1 = [1, '', 2, 3, '', 5]

function delEmptyEl(arr){
    arr.forEach((e, i) => {
       if(!e){
        arr.splice(i, 1)
       } 
    });

    return arr;
}

console.log(delEmptyEl(array1))

// способ 2

const array2 = [1, '', 2, 3, '', 5];

// Удаляем все пустые строки
const filteredArray = array2.filter(item => item !== '');

console.log(filteredArray); // [1, 2, 3, 5]

/****************************************************************************************/

/* 3. Отсортируйте элементы в каждом подмассиве. */

// способ 1

const arr = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
]

function sortArr(arr) {
    arr.forEach(element => {
        element.sort((a,b) => a - b)
    });

    return arr;
}

console.log(sortArr(arr))

// способ 2 

const array = [
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
];

// Сортируем каждый подмассив
const sortedArray = array.map(subArray => subArray.sort((a, b) => a - b));

console.log(sortedArray);

/****************************************************************************************/

/* 3. Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми. */

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

// Определяем длину наименьшего массива
const minLength = Math.min(arr1.length, arr2.length);

// Обрезаем больший массив до длины наименьшего
arr2 = arr2.slice(0, minLength);

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]