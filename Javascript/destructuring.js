// destructuring = extract values from arrays and objects, then assign them to varaiables in a convenient way

// swap value

let a = 5;
let b = 2;

[a, b] = [b, a];

console.log(a, b);
// swap 2 elements in an array

const colors = ["red", "green", "blue"];

[colors[0], colors[2]] = [colors[2], colors[0]];

console.log(colors);

// assign array elements to variables

const [first, ...extraColors] = colors;

console.log(first);
console.log(extraColors);

// extract values from objects

const person1 = {
  name: "John",
  age: 30,
  job: "Developer",
  address: "123 Main St",
};

const person2 = {
  name: "Jane",
  age: 25,
  address: "456 Elm St",
};

const { name, age, job = "Unemployed", address } = person2;

// destructure in function parameters

function displayPerson({ name, age, job = "Unemployed", address }) {
  console.log(`name: ${name}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
  console.log(`address: ${address}`);
}

displayPerson(person1);
displayPerson(person2);
