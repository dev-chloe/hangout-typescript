interface Iperson {
  name: string
  age: number
  etc?: boolean // 선택속성
}
let good: Iperson = { name: 'Jack', age: 22 }

// age 속성이 비어서 오류
// let bad1: Iperson = { name: 'koko' } 

// name 속성이 비어서 오류
// let bad2: Iperson = { age: 2 } 

// name, age 속성이 비어서 오류
// let bad3: Iperson = {} 

// etc 속성이 있어서 오류 (선택 속성이 없을 경우)
// let bad4: Iperson = { name: 'Jack', age: 22, etc: true } 

// etc 속성이 있어서 오류 (선택 속성이 있을 경우)
let good2: Iperson = { name: 'Jack', age: 22, etc: true } 