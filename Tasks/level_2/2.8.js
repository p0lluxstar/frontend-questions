// 1. Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.

function getRandomElement(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Введите непустой массив");
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Пример использования:
const myArray = [1, 2, 3, 4, 5];
console.log(getRandomElement(myArray)); // Например, 3

/********************************************/

// 2. Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.

function getRandomElement(arr) {
    let lastElement = null; // Переменная для отслеживания последнего выбранного элемента

    return function() {
        if (arr.length === 0) {
            return null; // Если массив пуст, возвращаем null
        }

        let randomElement;
        
        // Повторяем выбор, пока новый элемент не будет отличаться от последнего
        do {
            const randomIndex = Math.floor(Math.random() * arr.length);
            randomElement = arr[randomIndex];
        } while (randomElement === lastElement);

        lastElement = randomElement; // Обновляем последний выбранный элемент
        return randomElement;
    };
}

// Пример использования:
const arr = [1, 2, 3, 4, 5];
const getRandom = getRandomElement(arr);

console.log(getRandom()); // Например, 3
console.log(getRandom()); // Например, 1 (не 3)
console.log(getRandom()); // Например, 4 (не 1)
