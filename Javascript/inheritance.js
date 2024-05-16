// inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child) helps with code reusabiltiy

// 使用繼承可以重複使用代碼，

class Animal {
  alive = true;

  eat() {
    console.log(`${this.name} eating`);
  }

  sleep() {
    console.log(`${this.name} sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "fox";
  swim() {
    console.log(`${this.name} is swimming`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();

rabbit.alive = false;
console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();
fish.swim();
