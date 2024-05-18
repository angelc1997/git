// classList = Element property that allows you to add and remove CSS classes
// classList.add() / classList.remove() / classList.toggle()
// classList.replace() / classList.contains()

const title = document.getElementById("title");
const button = document.getElementById("button");

let buttons = document.querySelectorAll(".buttons");

title.classList.add("enabled");
// button.classList.remove("enabled");

button.addEventListener("mouseover", () => {
  //   button.classList.add("hover");
  button.classList.toggle("hover");
});

button.addEventListener("mouseout", () => {
  //   button.classList.remove("hover");
  button.classList.toggle("hover");
});

title.addEventListener("click", (event) => {
  if (event.target.classList.contains("disable")) {
    event.target.textContent += "DISABLE";
  } else {
    event.target.classList.replace("enabled", "disable");
  }
});

buttons.forEach((button) => {
  button.classList.add("enabled");
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });

  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disable")) {
      event.target.classList.replace("disable", "enabled");
    } else {
      event.target.classList.replace("enabled", "disable");
    }
  });
});
