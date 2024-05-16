// static = keyword that defines properties or methods that to a class itself

class MathUtil {
  static PI = 3.14;

  static getDiameter(radius) {
    return 2 * radius;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getCircumference(1));
console.log(MathUtil.getArea(1));

class User {
  static userCount = 0;

  constructor(name) {
    this.name = name;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online `);
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user1 = new User("John");
const user2 = new User("Anna");
const user3 = new User("Peter");

console.log(user1.name);
console.log(User.userCount);
user1.sayHello();
User.getUserCount();
