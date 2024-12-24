// 1. Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

// способ 1

const arr = ['1', '2', 'a', 'abd', '2', 2, 'a']

function fun (arr){

    let res = []

    for (let i = 0; i < arr.length; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }

    console.log(res)
}

fun(arr)

// способ 2

const arr2 = ['1', '2', 'a', 'abd', '2', 2, 'a'];

function fun(arr) {
    const res = [...new Set(arr)];
    console.log(res);
}

fun(arr2);

/********************************************/

// Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.

const inputArray = [1, 2, 2, 3, 3, 3, 4, 4, 5, 2, 2];

function fun (arr){

    let res = []

    for(let i = 1; i <= arr.length; i++){
        if(arr[i] !== arr[i - 1]){
            res.push(arr[i - 1])
        }
    }

    console.log(res)
}

fun(inputArray)

/********************************************/

// 3. Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:

// {
// 	max: 9,
// 	min: 1,
// }

// способ 1

const arrNumber = [3, 4, 45, 6, 1, 343, 38, 86, 9, -1];

function fun(arr) {
    let min = arr[0]; // Инициализируем с первым элементом массива
    let max = arr[0]; // Инициализируем с первым элементом массива

    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return {
        min: min,
        max: max,
    };
}

console.log(fun(arrNumber)); // { min: -1, max: 343 }

// способ 2

const arrNumber2 = [3, 4, 45, 6, 1, 343, 38, 86, 9, -1];

function fun(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
    };
}

console.log(fun(arrNumber2)); // { min: -1, max: 343 }