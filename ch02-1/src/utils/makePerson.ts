export function makePerson(name: string, age: number) {
  return { name: name, age: age };
}

export function testMakePerson() {
  console.log(
    makePerson("kiki", 39),
    makePerson("jin", 23)
  );
}
