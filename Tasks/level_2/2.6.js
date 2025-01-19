// 1. Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.

function isValidDate(dateString) {
    // Разделяем строку по символу "-"
    const [year, month, day] = dateString.split('-').map(Number);

    console.log(!year)
    
    // Проверяем, что год, месяц и день являются числами
    if (!year || !month || !day) {
        console.log('aaa')
        return false;
    }
    
    // Создаем объект Date
    const date = new Date(year, month - 1, day); // Месяцы начинаются с 0
    
    // Проверяем, совпадают ли компоненты
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
  }

// Примеры использования
console.log(isValidDate("2025-01-18")); // true
console.log(isValidDate("2025-02-30")); // false
console.log(isValidDate("abcd-12-15")); // false
console.log(isValidDate("2025-13-01")); // false

/********************************************/

// 2. Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function f(num){
  let res = ''

  for(let i = 0; i < num; i++){
    const rendom = Math.floor(Math.random() * alphabet.length)
    res += alphabet[rendom]
  }

  return res
}

f(10)

/********************************************/

// 3. Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.

function f(str){
    let res = ''
  
    const arr = res.split(' ')
  
    return arr.map(word => word[0].toUpperCase()).join('')
  }
  
  f('Сделайте функцию, которая параметром')

/********************************************/

// 4. Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.

function replaceWithDivisors(numbers) {
    return numbers.map(num => {
        const divisors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i); // Добавляем делитель в массив
            }
        }
        return divisors;
    });
}

// Пример использования
console.log(replaceWithDivisors([6, 12, 15])); 
// Вывод: [[1, 2, 3, 6], [1, 2, 3, 4, 6, 12], [1, 3, 5, 15]]

/********************************************/

// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:

// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

function convertSeconds(seconds) {
    const result = {
        d: Math.floor(seconds / (24 * 60 * 60)), // Количество дней
        h: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)), // Часы
        m: Math.floor((seconds % (60 * 60)) / 60), // Минуты
        s: seconds % 60, // Секунды
    };
    return result;
}

// Пример использования
console.log(convertSeconds(1234567));
// Вывод: { d: 14, h: 6, m: 56, s: 7 }
