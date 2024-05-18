// JSON = JavaScript Object Notation

// JSON.stringify()
// JSON.parse()

const names = ["John", "Jane", "Smith", "Anna"];

const person = {
  name: "John",
  age: 30,
  isEmployed: true,
  hobbies: ["coding", "reading", "walking"],
};

const people = [
  {
    name: "John",
    age: 30,
    isEmployed: true,
  },
  {
    name: "Jane",
    age: 25,
    isEmployed: false,
  },
  {
    name: "Smith",
    age: 35,
    isEmployed: false,
  },
  {
    name: "Anna",
    age: 40,
    isEmployed: true,
  },
];

const jsonString = JSON.stringify(people);
console.log(people);

fetch("people.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
