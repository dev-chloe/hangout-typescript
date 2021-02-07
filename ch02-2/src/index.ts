import Iperson from './person/IPerson'
import Person, { makePerson } from './person/Person'

const testMakePerson = (): void => {
  let jane: Iperson = makePerson('jane')
  let jack: Iperson = new Person('jack')
  console.log(jane, jack)
}

testMakePerson()


//결과
//{ name: 'jane', age: 13 } { name: 'jack', age: 80 }