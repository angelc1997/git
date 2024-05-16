// function declaration
// function expressions

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 將函式作為參數傳遞
const squares1 = numbers.map(square);
function square(element) {
  return Math.pow(element, 2);
}
console.log(squares1);

// 將完整的函式直接傳遞，函式名稱可以拿掉
const squares2 = numbers.map(function (element) {
  return Math.pow(element, 2);
});
console.log(squares2);

// 使用箭頭函式
const squares3 = numbers.map((element) => Math.pow(element, 2));
console.log(squares3);

const total = numbers.reduce((acc, cur) => acc + cur);
console.log(total);
