// .filter()
// 會建立新的陣列

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(age) {
  return age >= 18;
}

function isChild(age) {
  return age < 18;
}
