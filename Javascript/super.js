// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`${this.name} moves at a speed of ${speed} mph`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`${this.name} can run`);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

const rabbit = new Rabbit("rabbit", 5, 20);
const fish = new Fish("fish", 2, 12);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

fish.swim();
rabbit.run();
