const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : []

const array: number[] = range(1, 10 + 1)
const half = array.length / 2

let belowHalf: number[] = array.filter((v, index) => index < half)
let overHalf: number[] = array.filter((v, index) => index >= half)
console.log(belowHalf, overHalf) // [ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9, 10 ]

let squres: number[] = range(1, 5 + 1)
  .map((val: number) => val * val)
console.log(squres) // [ 1, 4, 9, 16, 25 ]

let names: string[] = range(1, 5 + 1)
  .map((val, index) => `[${index}]: ${val}`)
console.log(names) // [ '[0]: 1', '[1]: 2', '[2]: 3', '[3]: 4', '[4]: 5' ]

let reduceSum: number = range(1, 100 + 1)
  .reduce((result: number, value: number) => result + value, 0)
console.log(reduceSum) // 5050

let reduceMul: number = range(1, 10 + 1)
  .reduce((result: number, value: number) => result * value, 1)
console.log(reduceMul) // 3628800
