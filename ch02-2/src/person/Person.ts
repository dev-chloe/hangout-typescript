import { makeRAndomNumber } from '../utils/makeRandomNumber'
import Iperson from './IPerson'

export default class Person implements Iperson {
  constructor(
    public name: string,
    public age: number = makeRAndomNumber()
  ) { }
}

export const makePerson = (name: string, age: number = makeRAndomNumber()): Iperson => ({ name, age })


// import * as 심벌 from '파일 상대 경로'
// export default는 한 모튤이 내보내는 기능 중 오직 한 개에만 붙일 수 있음
// export default가 붙은 기능은 import 문으로 불러올 때 중괄호 {} 없이 사용 가능 (IPerson 중괄호 없이 불러옴)
// export default는 exprot 등이 있는 파일에서도 사용 가능