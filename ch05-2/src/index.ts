import { fold } from './fold'
import { filter } from './filter'
import { map } from './map'

let sum = 0
for (let val = 1; val <= 100;)
  sum += val++
console.log(sum) //5050

const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : []

let numbers: number[] = range(1, 100 + 1)
// console.log(numbers)
/*
[
   1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
  13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
  73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100
]
*/

let numbers2: number[] = range(1, 100 + 1)

let result = fold(numbers2, (result, value) => result + value, 0)
console.log(result) //5050

let oddSum = 0
for (let val = 1; val <= 100; val += 2)
  oddSum += val
console.log(oddSum) //2500

let numbers3: number[] = range(1, 100 + 1)
const isOdd = (n: number): boolean => n % 2 != 0
let result2 = fold(
  filter(numbers3, isOdd),
  (result2, value) => result2 + value, 0)
console.log(result2) //2500

let evenSum = 0
for (let val = 0; val <= 100; val += 2)
  evenSum += val
console.log(evenSum) //2550

let numbers4: number[] = range(1, 100 + 1)
const isEven = (n: number): boolean => n % 2 == 0
let result3 = fold(
  filter(numbers4, isEven),
  (result3, value) => result3 + value, 0
)
console.log(result3) //2550

let squareSum = 0;
for (let val = 1; val <= 100; ++val)
  squareSum += val * val
console.log(squareSum) //338350

let numbers5: number[] = range(1, 100 + 1)
let result5 = fold(
  map(numbers5, value => value * value),
  (result5, value) => result5 + value, 0
)
console.log(result5) //338350