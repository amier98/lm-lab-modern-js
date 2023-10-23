// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  const newArray = [];
  passwords.forEach((person) => {
    if (person.length >= 9) {
      newArray.push(person);
    }
  });

  return newArray;
}
