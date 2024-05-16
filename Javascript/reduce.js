// .reduce()

const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = prices.reduce(sum);

console.log(`total price is $ ${total.toFixed(2)}`);

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

const sumPrice = prices.reduce((acc, cur) => acc + cur);
console.log(`total price is $ ${sumPrice}`);
