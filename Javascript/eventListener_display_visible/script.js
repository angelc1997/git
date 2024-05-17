const button = document.getElementById("button");
const img = document.getElementById("img");

// button.addEventListener("click", (event) => {
//   if (img.style.display === "none") {
//     button.textContent = "Hide";
//     img.style.display = "block";
//   } else {
//     button.textContent = "Show";
//     img.style.display = "none";
//   }
// });

// 保留原本的圖片位置

button.addEventListener("click", (event) => {
  if (img.style.visibility === "hidden") {
    button.textContent = "Hide";
    img.style.visibility = "visible";
  } else {
    button.textContent = "Show";
    img.style.visibility = "hidden";
  }
});
