// Car Constructor Function
function Car(make, model, year, isAvailable = true) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isAvailable = isAvailable;
}

// Customer Constructor Function
function Customer(name) {
  this.name = name;
  this.rentedCars = [];
}

// Rent a car method
Customer.prototype.rentCar = function(car) {
  if (car.isAvailable) {
      car.isAvailable = false;
      this.rentedCars.push(car);
      console.log(`${this.name} has rented the car: ${car.make} ${car.model}`);
  } else {
      console.log(`Sorry, the car ${car.make} ${car.model} is already rented.`);
  }
};

// Return a car method
Customer.prototype.returnCar = function(car) {
  setTimeout(() => {
      car.isAvailable = true;
      this.rentedCars = this.rentedCars.filter(rentedCar => rentedCar !== car);
      console.log(`${this.name} has returned the car: ${car.make} ${car.model}`);
  }, 2000); // Simulate a 2-second delay
};

// PremiumCustomer Constructor Function
function PremiumCustomer(name, discountRate) {
  Customer.call(this, name); // Inherit properties from Customer
  this.discountRate = discountRate;
}

PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Calculate rental price
function calculateRentalPrice(car, days, customer) {
  const basePricePerDay = 50;
  let carTypeRate = 1;

  switch (car.type) {
      case 'SUV':
          carTypeRate = 1.5;
          break;
      case 'Sedan':
          carTypeRate = 1.2;
          break;
      // Add more car types as needed
  }

  let price = basePricePerDay * carTypeRate * days;

  if (customer instanceof PremiumCustomer) {
      price -= price * (customer.discountRate / 100);
  }

  return price;
}

// Maintenance function
function Maintenance(car, delay) {
  setTimeout(() => {
      car.isAvailable = true;
      console.log(`The car ${car.make} ${car.model} is now available after maintenance.`);
  }, delay);
}

// Demonstration
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2019);
const car3 = new Car('Ford', 'Explorer', 2021);
car3.type = 'SUV';

const customer1 = new Customer('Alice');
const premiumCustomer1 = new PremiumCustomer('Bob', 10);

customer1.rentCar(car1);
premiumCustomer1.rentCar(car2);

const rentalPrice = calculateRentalPrice(car3, 5, premiumCustomer1);
console.log(`Rental price for Bob: $${rentalPrice}`);

customer1.returnCar(car1);
Maintenance(car1, 3000);
