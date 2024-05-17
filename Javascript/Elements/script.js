// CHANGE and ADD HTML ELEMENTS

// create an element
const newtitle = document.createElement("h1");

// add attributes/properties
newtitle.textContent = "Welcome";
newtitle.id = "mytitle";
newtitle.style.color = "red";
newtitle.style.textAlign = "center";

// append element to DOM
// document.body.prepend(newtitle);
document.getElementById("box1").append(newtitle);
document.getElementById("box2").prepend(newtitle);

// 插入元素在指定元素之前
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newtitle, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newtitle, boxes[0]);

// remove element // 選擇parent
document.getElementById("box2").removeChild(newtitle);

// ORDER LIST

const listItem = document.createElement("li");
listItem.textContent = "mango";
listItem.id = "mango";
listItem.style.fontWeight = "bold";

// document.body.append(listItem);
// document.getElementById("fruits").append(listItem);
document.getElementById("fruits").prepend(listItem);

const listItems = document.querySelectorAll("#fruits li");
console.log(listItems);
document.getElementById("fruits").replaceChild(listItem, listItems[2]);
