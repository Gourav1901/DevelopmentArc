// Person Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Introduce method for Person
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee Constructor Function
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Inherit properties from Person
    this.jobTitle = jobTitle;
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Work method for Employee
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Demonstration
const person1 = new Person("Alice", 30);
person1.introduce(); // "Hi, my name is Alice and I am 30 years old."

const employee1 = new Employee("Bob", 40, "Software Engineer");
employee1.introduce(); // "Hi, my name is Bob and I am 40 years old."
employee1.work(); // "Bob is working as a Software Engineer."
