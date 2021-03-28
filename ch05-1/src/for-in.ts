let names = ['Eric', 'Endy', 'Min']

for (let index in names) {
  const name = names[index]
  console.log(`[${index}]: ${name}`)
}
/*
[0]: Eric
[1]: Endy
[2]: Min
*/

let eric = { name: 'Eric', age: 43 }
for (let property in eric) {
  console.log(`${property}: ${eric[property]}`)
}
/*
name: Eric
age: 43
*/

for (let name of ['Eric', 'Endy', 'Min'])
  console.log(name)

/*
Eric
Endy
Min
*/