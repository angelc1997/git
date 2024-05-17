// DOM = Document Object Model

// document object
// 使用JS動態改變網頁內容

// console.dir(document);

const username = "Harry";
const title = document.getElementById("title");

title.textContent += username === "" ? `Guest` : username;
