// NodeList

// 如果新增的第五個在程式碼最後面，則不會出現在buttons中

// const newBtn = document.createElement("button");
// newBtn.textContent = "Button5";
// newBtn.classList = "buttons";
// document.body.appendChild(newBtn);

let buttons = document.querySelectorAll(".buttons");

// add an element /step1 create /step2 add attribute or property /step3 append
const newBtn = document.createElement("button");
newBtn.textContent = "Button5";
newBtn.classList = "buttons";
document.body.appendChild(newBtn);

buttons = document.querySelectorAll(".buttons");

// eventListener /click/mouseover/mouseout

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "lightblue";
  });

  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "plum";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightgreen";
  });
});

// remove an element

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll(".buttons");
    console.log(buttons);
  });
});
