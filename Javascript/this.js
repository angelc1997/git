// this: reference to the object

// 限制：arrow functions 不允许使用 this

const person1 = {
  name: "John",
  favoriteFood: "pizza",
  sayHello: function () {
    // person1.name = this.anme
    console.log(`Hello, my name is ${this.name}`);
  },
};

person1.sayHello();
