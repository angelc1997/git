// eventListener
// .addEventListener(event, callback)

const box = document.getElementById("box");
const button = document.getElementById("button");

button.addEventListener("click", click);

function click(event) {
  box.style.backgroundColor = "blue";
  box.textContent = "I was clicked";
}

button.addEventListener("mousemove", mousemove);
function mousemove(event) {
  box.style.backgroundColor = "orange";
  box.textContent = "Mouse is here";
}

button.addEventListener("mouseout", mouseout);

function mouseout(event) {
  box.style.backgroundColor = "green";
  box.textContent = "Mouse is out";
}
