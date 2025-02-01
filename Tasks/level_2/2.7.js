// 1. Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

function sortWordsAlphabetically(text) {
    // Разбиваем текст на массив слов
    const words = text.split(' ');

    // Сортируем слова в алфавитном порядке
    const sortedWords = words.sort((a, b) => a.localeCompare(b));

    // Объединяем обратно в строку
    return sortedWords.join(' ');
}

// Пример использования
const text = "яблоко груша банан апельсин ананас";
const sortedText = sortWordsAlphabetically(text);

console.log(sortedText);
// Вывод: "ананас апельсин банан груша яблоко"

// Используем функцию сравнения a.localeCompare(b), чтобы правильно учитывать национальные символы и регистр (например, кириллицу).

/********************************************/

// 2. Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.

// способ 1
function getCommonElementsUnique(array1, array2) {
    return [...new Set(array1.filter(element => array2.includes(element)))];
}

console.log(getCommonElementsUnique([1, 2, 2, 3], [2, 3, 3, 4])); // [2, 3]

// способ 2
function getCommonElementsOptimized(array1, array2) {
    const set2 = new Set(array2);
    return array1.filter(element => set2.has(element));
}

console.log(getCommonElementsOptimized([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// способ 2 ускоряет поиск за счёт O(1) операций проверки в Set

/********************************************/

// 3. Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.

function createRandomGenerator() {
    let lastNumber = null; // Хранит последнее сгенерированное число
  
    return function generateRandom() {
      let newNumber;
  
      // Генерируем новое число, пока оно равно предыдущему
      do {
        newNumber = Math.floor(Math.random() * 100); // Диапазон: 0-99 (можно изменить)
      } while (newNumber === lastNumber);
  
      lastNumber = newNumber; // Обновляем последнее число
      return newNumber;
    };
  }
  
  // Пример использования
  const getRandom = createRandomGenerator();
  
  console.log(getRandom());
  console.log(getRandom());
  console.log(getRandom());
  
/********************************************/

// 4. Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

let arr = [1, 2, 3, 4, 5];

function func(a, n) {
  let temp = a.findIndex((num) => num === n);
  if (temp === a.length - 1) {
    return a[0]; // Возврат первого элемента, если элемент последний
  }
  return a[temp + 1]; // Возврат следующего элемента
}

console.log(func(arr, 3)); // Вывод: 4
console.log(func(arr, 5)); // Вывод: 1 (цикл по кругу)
console.log(func(arr, 1)); // Вывод: 2

// Метод findIndex ищет индекс указанного элемента (n) в массиве a. Если элемент найден, возвращается его индекс; если нет, результат будет -1.