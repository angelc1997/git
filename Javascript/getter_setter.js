// getter = special method that makes a property readable
// setter = special method that makes a property writable

// validate and modidy a value when reading/writing a property

// 使用驗證避免有人傳垃圾value
// 如 const rectangle = new Rectangle(-10000, "pizza");

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be greater than 0");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be greater than 0");
    }
  }

  get width() {
    return `${this._width.toFixed(2)}cm`;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 10;
rectangle.height = "pizza";

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set name(newName) {
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      console.error("Name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be greater than 0");
    }
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}

const person = new Person(420, 69);
console.log(person.name);
console.log(person.age);
