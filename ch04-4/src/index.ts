import { init } from './init'

init(() => console.log('custom initialization finished.'))

// 결과

// default initialization finished.
// custom initialization finished.
// all initialization finished.

const calc = (value: number, cb: (number) => void): void => {
  let add = (a, b) => a + b
  function multiply(a, b) { return a * b }

  let result = multiply(add(1, 2), value)
  cb(result)
}

calc(30, (result: number) => console.log(`result is ${result}`))

// 결과 
// result is 90