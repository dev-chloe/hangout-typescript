import Iperson from './person/IPerson'
import Person from './person/Person'
import Chance from 'chance'
import * as R from 'ramda'
// import Person, { makePerson } from './person/Person'

// const testMakePerson = (): void => {
//   let jane: Iperson = makePerson('jane')
//   let jack: Iperson = new Person('jack')
//   console.log(jane, jack)
// }

// testMakePerson()

const chance = new Chance()

let person: Iperson[] = R.range(0, 2).map((n: number) => new Person(chance.name(), chance.age()))

console.log(person)

//결과
//[ Person { name: 'Milton Howell', age: 42 }, Person { name: 'Roxie Knight', age: 34 } ]