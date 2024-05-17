// eventListener
// events: keydown, keyup

const box = document.getElementById("box");

box.addEventListener("keydown", (event) => {
  event.target.style.backgroundColor = "blue";
  event.target.textContent = "🤖";
});
box.addEventListener("keyup", (event) => {
  event.target.style.backgroundColor = "green";
  event.target.textContent = "☠️";
});

const move = 50;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    const boxRect = box.getBoundingClientRect();
    console.log(boxRect);
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    switch (event.key) {
      case "ArrowUp":
        if (boxRect.top - move >= 0) {
          y -= move;
        }
        break;
      case "ArrowDown":
        if (boxRect.bottom + move <= viewportHeight) {
          y += move;
        }
        break;
      case "ArrowLeft":
        if (boxRect.left - move >= 0) {
          x -= move;
        }
        break;
      case "ArrowRight":
        if (boxRect.right + move <= viewportWidth) {
          x += move;
        }
        break;
    }

    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
  }
});
