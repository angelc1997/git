// sort() = sort elements of an array
// sorts elements as strings in lexicographic order

let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

fruits.sort();
console.log(fruits);

let numbers = [1, 10, 4, 5, 6, 7, 8, 9, 2, 3];

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [
  { name: "John", age: 30, gpa: 3.5 },
  { name: "Anna", age: 25, gpa: 3.0 },
  { name: "Peter", age: 20, gpa: 2.5 },
];

// sort by age
people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);
