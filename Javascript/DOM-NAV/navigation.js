// DOM Navigation

// const parent1 = document.getElementById("fruits");
// const firstChild = parent.firstElementChild;
// firstChild.style.backgroundColor = "red";

// .firstElementChild

const ulAll = document.querySelectorAll("ul");

ulAll.forEach((ul) => {
  const firstChild = ul.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
});

// .lastElementChild

ulAll.forEach((ul) => {
  const lastChild = ul.lastElementChild;
  lastChild.style.backgroundColor = "green";
});

// .nextElementSibling

const element1 = document.getElementById("apple");
const nextElement = element1.nextElementSibling;
nextElement.style.backgroundColor = "red";

// .previousElementSibling

const element2 = document.getElementById("orange");
const previousElement = element2.previousElementSibling;
previousElement.style.backgroundColor = "blue";

// .parentElement
// .children

const element3 = document.getElementById("apple");
const parent = element3.parentElement;
console.log(parent);

const element4 = document.getElementById("fruits");
const children = element4.children;
console.log(children);
