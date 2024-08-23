// Product Constructor Function
function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.displayDetails = function() {
  console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
};

Product.prototype.updateQuantity = function(amount) {
  this.quantity += amount;
  console.log(`${this.name} quantity updated to ${this.quantity}`);
};

// Electronics Constructor Function
function Electronics(name, price, quantity, brand, model) {
  Product.call(this, name, price, quantity);
  this.brand = brand;
  this.model = model;
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.powerOn = function() {
  console.log(`${this.brand} ${this.model} is now ON.`);
};

Electronics.prototype.powerOff = function() {
  console.log(`${this.brand} ${this.model} is now OFF.`);
};

// Clothing Constructor Function
function Clothing(name, price, quantity, size, material) {
  Product.call(this, name, price, quantity);
  this.size = size;
  this.material = material;
}

Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

Clothing.prototype.tryOn = function() {
  console.log(`Trying on ${this.name} of size ${this.size} and material ${this.material}.`);
};

// Books Constructor Function
function Books(name, price, quantity, author, genre) {
  Product.call(this, name, price, quantity);
  this.author = author;
  this.genre = genre;
}

Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

Books.prototype.read = function() {
  console.log(`Reading "${this.name}" by ${this.author}. Genre: ${this.genre}`);
};

// Demonstration
const laptop = new Electronics('Laptop', 1200, 10, 'Dell', 'XPS 13');
laptop.displayDetails();
laptop.powerOn();

const tshirt = new Clothing('T-Shirt', 20, 100, 'L', 'Cotton');
tshirt.displayDetails();
tshirt.tryOn();

const book = new Books('JavaScript: The Good Parts', 15, 50, 'Douglas Crockford', 'Programming');
book.displayDetails();
book.read();
