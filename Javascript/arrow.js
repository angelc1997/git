// arrow functions

// (parameters) => {some code}

const hello = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are ${age} years old`);
};

hello("John", 20);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map((element) => {
  return Math.pow(element, 2);
});

console.log(squares);
