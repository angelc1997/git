// element selectors

// document.getElementById // element or null
// document.getELementByClassName // html collection
// document.getElementByTagName // html collection
// document.querySelector  // first element
// document.querySelectorAll // nodelist

const title = document.getElementById("title");
title.style.backgroundColor = "yellow";
title.style.textAlign = "center";

console.log(title);

const fruits = document.getElementsByClassName("fruits");

console.log(fruits);

fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "green";

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});

const h4 = document.getElementsByTagName("h4");
console.log(h4);

// h4[0].style.color = "red";

for (let h of h4) {
  h.style.backgroundColor = "red";
}

const li = document.getElementsByTagName("li");

for (let l of li) {
  l.style.backgroundColor = "green";
}

const element = document.querySelector(".fruits");
console.log(element);

const fruits2 = document.querySelectorAll(".fruits");
console.log(fruits2);

fruits2[0].style.backgroundColor = "green";
