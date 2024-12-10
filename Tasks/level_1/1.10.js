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

