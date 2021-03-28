import { split } from './split'
import { join } from './join'

let array = new Array

array.push(1); array.push(2); array.push(3)
console.log(array) // [ 1, 2, 3 ]

let numbers = [1, 2, 3]
let strings = ['hello', 'there']
console.log(numbers, strings) //[ 1, 2, 3 ] [ 'hello', 'there' ]

let a = [1, 2, 3]
let o = { name: 'Ria', age: 1 }
console.log(Array.isArray(a), Array.isArray(o)) //true false

let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['hello', 'there']

type IPerson = { name: string, age?: number }
let personArray: IPerson[] = [{ name: 'Runa' }, { name: 'Jina', age: 23 }]

console.log(
  split('hello'),         //[ 'h', 'e', 'l', 'l', 'o' ] 
  split('h_e_l_l_o', '_') //[ 'h', 'e', 'l', 'l', 'o' ]
)

console.log(
  join(['h', 'e', 'l', 'l', 'o']),     //hello 
  join(['h', 'e', 'l', 'l', 'o'], '_') //h_e_l_l_o
)

const numbers2: number[] = [1, 2, 3, 4, 5]
for (let index = 0; index < numbers2.length; index++) {
  const item: number = numbers2[index]
  console.log(item) // 1 2 3 4 5
}

let array2: number[] = [1, 2, 3, 4, 5]
let [first, second, third, ...rest] = array2
console.log(first, second, third, rest) //1 2 3 [ 4, 5 ]


const arrayLength = <T>(array: T[]): number => array.length
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0

console.log(
  arrayLength(numArray), // 3
  arrayLength(strArray), // 2
  arrayLength(personArray), // 2
  isEmpty([]), // true
  isEmpty([1]) // false
)
let mergedArray: number[] = [...numArray, ...numbers2, 8]
console.log(mergedArray) // [ 1, 2, 3, 1, 2, 3, 4, 5, 8 ]

const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : []

let numbers3: number[] = range(1, 9 + 1)
console.log(numbers3) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]