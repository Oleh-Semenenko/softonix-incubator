// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b }
function sum1 (a, b, c) { return a + b + c }

// eslint-disable-next-line
function memoize (fn) {
  const cashe = {}

  return (...args) => {
    if (args in cashe) {
      console.log(`From cashe: ${cashe[args]}`)
      return cashe[args]
    } else {
      cashe[args] = fn(...args)
      console.log(`First count: ${cashe[args]}`)
      return cashe[args]
    }
  }
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum)
const sumMemoized1 = memoize(sum1)

sumMemoized(1, 3) // результат 4
sumMemoized(3, 3) // результат 6
sumMemoized(1, 3) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання

sumMemoized1(1, 3, 3) // результат 7
sumMemoized1(3, 3, 3) // результат 9
sumMemoized1(1, 3, 3) // результат 7, відбулось повторне виконання, результат повернуто з кешу без виклику додавання

// Функція коректно спрацьовує при передачі різної кількості аогументів
