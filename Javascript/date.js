const date = new Date("2023-12-31");

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();
const datOfWeek = date.getDay();

date.setFullYear(2022);
date.setMonth(1);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(seconds);
console.log(datOfWeek);
