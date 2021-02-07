let MAX_AGE = 100

export interface Iperson {
  name: string,
  age: number
}

class Person implements Iperson {
  constructor(
    public name: string,
    public age: number
  ) { }
}

function makeRAndomNumber(max: number = MAX_AGE): number {
  return Math.ceil((Math.random() * max))
}

export const makePerson = (name: string, age: number = makeRAndomNumber()) => ({ name, age })
