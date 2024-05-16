// nested objects = Objects inside of other Objects

// Person{Address{}, ContactInfo{}}

const person = {
  name: "Sagar",
  age: 20,
  isStudent: true,
  hobbies: ["cricket", "football"],
  address: {
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
  },
};

console.log(person.hobbies[0]);
console.log(person.address);
console.log(person.address.city);

for (const property in person.address) {
  console.log(property);
  console.log(person.address[property]);
}

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(city, state, country) {
    this.city = city;
    this.state = state;
    this.country = country;
  }
}

const person1 = new Person("Sagar", 20, "Kolkata", "West Bengal", "India");
const person2 = new Person("Ashish", 25, "Chennai", "Tamilnadu", "India");

console.log(person1.address);
console.log(person1.address.state);
