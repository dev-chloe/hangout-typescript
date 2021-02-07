import * as U from '../utils/makeRandomNumber'

export default interface Iperson {
  name: string,
  age: number
}

class Person implements Iperson {
  constructor(
    public name: string,
    public age: number
  ) { }
}

export const makePerson = (name: string, age: number = U.makeRAndomNumber()): Iperson => ({ name, age })


// import * as 심벌 from '파일 상대 경로'
