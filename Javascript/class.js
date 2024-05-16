// class

// ES6 feature

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`product name: ${this.name}`);
    console.log(`product price: ${this.price.toFixed(2)}`);
  }

  calculateTax(tax) {
    return this.price + this.price * tax;
  }
}

const tax = 0.05;
const Product1 = new Product("laptop", 200);
const Product2 = new Product("mobile", 100);

Product1.displayProduct();
const total = Product1.calculateTax(tax);
console.log(`Total price with tax is $${total.toFixed(2)}`);
