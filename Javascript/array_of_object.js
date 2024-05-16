// array of objects

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "grape", color: "purple", calories: 75 },
  { name: "kiwi", color: "green", calories: 95 },
];

console.log(fruits[0].name);

// fruits.pop();
// fruits.splice(1, 2);
fruits.push({ name: "mango", color: "yellow", calories: 95 });

console.log(fruits);

// forEach()
fruits.forEach((fruit) => console.log(fruit.name));

// map()
const names = fruits.map((fruit) => fruit.name);
const colors = fruits.map((color) => color.color);
console.log(names);
console.log(colors);

// filter()
const redFruits = fruits.filter((fruit) => fruit.color === "red");
console.log(redFruits);

// reduce()
const totalCalories = fruits.reduce((acc, cur) => acc + cur.calories, 0);
const maxCalories = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(totalCalories);
console.log(maxCalories);
