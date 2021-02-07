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

//chance 가짜 데이터 만들어 주는 것 -> Chance 클래스 하나만 export default 형태로 재공 중괄호 X
//ramda 함수형 유틸리티 패키지 -> 다양한 기능을 제공하므로 import * as R 형태로 사용
