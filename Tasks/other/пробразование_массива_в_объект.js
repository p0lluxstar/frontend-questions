// Преобразование массива в объект

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
 
// с помощью foreach  
const obj1 = {}

users.forEach(user => {
    obj1[user.id] = user
})

console.log('obj1', obj1)

// с помощью классического цикла
const obj2 = {}

for (let i = 0; i < users.length; i++){
    obj2[users[i].id] = users[i]
}

console.log('obj2', obj2)

// с помощью key of
const obj3 = {}

for (const user of users){
    obj3[user.id] = user
}

console.log('obj3', obj3)

// с помощью reduce
const obj4 = users.reduce((acc, user) => {{acc[user.id] = user}; return acc}, {})

console.log('obj4', obj4)

// c object.assign и map

const obj5 = Object.assign({}, ...users.map(user => ({[user.id]: user})))

// В JavaScript синтаксис { [expression]: value } используется для определения вычисляемого свойства в объекте. Внутри квадратных скобок можно использовать выражения, результат которых станет именем свойства.

console.log('obj5', obj5)

// c пощощью Map

const obj6 = new Map(users.map(user => [user.id, user]))

console.log(obj6)
console.log(obj6.get(2))