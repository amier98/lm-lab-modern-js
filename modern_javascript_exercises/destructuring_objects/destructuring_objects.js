// Instructions can be found in destructuring_objects.md

export function introduction(person) {
  const { city, name, pet } = person;

  console.log(person);

  return "Hello my name is " + name + " and I live in " + city + " with " + pet;
}
