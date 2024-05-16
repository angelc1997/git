// object = {key : value, function()}

const person = {
  name: "Sagar",
  age: 20,
  address: "Kolkata",
  greet: function () {
    console.log("Hello World");
  },
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.greet);
person.greet();
