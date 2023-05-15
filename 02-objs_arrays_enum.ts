// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
//   } = {
//   name: "Yu An",
//   age: 28,
//   hobbies: ["coffee", "reading"],
//   role: [2, 'author']
// };

enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 200
}

const person = {
  name: "Yu An",
  age: 28,
  hobbies: ["coffee", "reading"],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}