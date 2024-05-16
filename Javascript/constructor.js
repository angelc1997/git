// constructor

function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
  this.drive = function () {
    console.log(`You  drive the ${this.make} ${this.model}`);
  };
}

const car1 = new Car("Ford", "Mustang", 1969, "red");
const car2 = new Car("Toyota", "Corolla", 1999, "blue");
const car3 = new Car("Nissan", "Altima", 2013, "green");

console.log(car1);
console.log(car2.make);

car1.drive();
