import { IPerson } from './Iperson_ICompany'

let jack: IPerson = { name: 'Jack', age: 23 }

let { name, age } = jack
console.log(name, age) //Jack 23

let address: any = {
  country: 'Korea',
  city: 'Seoul',
  address1: 'Gangnam-gu',
  address2: 'Sinsa-dong 123-456',
  address3: '789 street, 2 Floor ABC building'
}

const { country, city, ...detail } = address

// {
//   address1: 'Gangnam-gu',
//   address2: 'Sinsa-dong 123-456',
//   address3: '789 street, 2 Floor ABC building'
// }
console.log(detail)

let part1 = { name: 'Jenny' }, part2 = { age: 22 }, part3 = { city: 'Seoul', country: "Kr" };
let merged = { ...part1, ...part2, ...part3 }

//{ name: 'Jenny', age: 22, city: 'Seoul', country: 'Kr' }
console.log(merged)