function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// Method to display product details
Product.prototype.displayDetails = function() {
  console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
};

// Method to update quantity
Product.prototype.updateQuantity = function(amount) {
  this.quantity += amount;
  console.log(`${this.name} quantity updated to ${this.quantity}`);
};
