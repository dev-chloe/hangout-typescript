
import Iperson from './person/IPerson'

class Person1 {
  constructor(
    public name: string,
    public age?: number
  ) { }
}

let jake: Person1 = new Person1('Jake', 44)
console.log(jake)

class Person2 implements Iperson {
  constructor(
    public name: string,
    public age: number
  ) { }
}

let jane: Iperson = new Person2('Jane', 12)
console.log(jane)

abstract class AbstractPerson3 {
  abstract name: string
  constructor(
    public age?: number
  ) { }
}

class Person3 extends AbstractPerson3 {
  constructor(
    public name: string,
    age?: number
  ) {
    super(age)
  }
}
let jin: Person3 = new Person3('Jin', 56)
console.log(jin)