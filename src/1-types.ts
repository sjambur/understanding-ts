const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const number1 = 5;
const number2 = 2.8;

console.log(add(number1, number2));

enum RoleTypes {
  AUTHOR,
  READER,
}

// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: RoleTypes;
  // role: [number, string];
} = {
  name: "sachin",
  age: 40,
  hobbies: ["sports", "cooking"],
  role: RoleTypes.AUTHOR,
  //role: [2, "author"],
};

// person.role.push("admin");

let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person.role);
