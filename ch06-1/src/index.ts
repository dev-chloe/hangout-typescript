import { createRangeIterable } from './createRangeIterable'
import { RangeIterable } from './RangeIterable'
import { StringIterable } from './StringIterable'

const iterator = createRangeIterable(1, 3 + 1) // 반복기 동작하지 않는다
while (true) {
  const { value, done } = iterator.next() // 반복기 동작 시킨다
  if (done) break
  console.log(value) // 1 2 3
}

const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : []

for (let value of range(1, 3 + 1))
  console.log(value) // 1 2 3

const iterator2 = new RangeIterable(1, 3 + 1)

for (let value of iterator2)
  console.log(value) // 1 2 3

for (let value of new StringIterable(['hello', 'world', '?']))
  console.log(value)
/*
hello
world
?
*/