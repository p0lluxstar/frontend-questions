// 1. Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

const numbers = [3, 13, 23, 33, 43];

const allContainThree = numbers.every(num => num.toString().includes('3'));

console.log(allContainThree); // true, если все числа содержат цифру 3

// .every(): Возвращает true, если все числа в массиве проходят проверку.

/****************************************************************************************/

// 2. Дана строка в формате:

// 'kebab-case'
// Преобразуйте ее в формат:

// 'snake_case'

const kebabCase = 'kebab-case';

const snakeCase = kebabCase.replace(/-/g, '_');

console.log(snakeCase); // 'snake_case'

// /-/g — регулярное выражение, которое ищет все дефисы в строке (g — глобальный флаг для поиска всех совпадений).

/****************************************************************************************/

// 3. Дана строка в формате:

// 'snake_case'
// Преобразуйте ее в формат:

// 'camelCase'

const snakeCase1 = 'convert_snake_case_to_camel_case';
const camelCase = snakeCase1
    .split('_')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
console.log(camelCase); // 'convertSnakeCaseToCamelCase'

// word.slice(1): Извлекает оставшуюся часть строки, начиная со второго символа ('xample').

/****************************************************************************************/

// 4. Дана строка в формате:

// 'camelCase'
// Преобразуйте ее в формат:

// 'snake_case'

function camelToSnake(camelCase) {
    let snakeCase = '';

    for (let char of camelCase) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            // Если символ заглавный, добавляем "_" и делаем его строчным
            snakeCase += '_' + char.toLowerCase();
        } else {
            // Если символ не заглавный, просто добавляем его
            snakeCase += char;
        }
    }

    return snakeCase;
}

const camelCase2 = 'camelCaseExample';
const snakeCase2 = camelToSnake(camelCase2);

console.log(snakeCase); // 'camel_case_example'
