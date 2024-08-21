// Book class
class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  getInfo() {
    return `${this.title} by ${this.author} (${this.year}) - ${this.genre}`;
  }
}

// Factory function to create new books
function createBook(title, author, year, genre) {
  return new Book(title, author, year, genre);
}

// Library class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  filterBooksByYear(year) {
    return this.books.filter(book => book.year > year);
  }

  getAllTitles() {
    return this.books.map(book => book.title);
  }

  getTotalBooks() {
    return this.books.reduce((total, book) => total + 1, 0);
  }

  getAveragePublicationYear() {
    const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
    return totalYears / this.books.length;
  }
}

// Usage example
const library = new Library();

// Adding books using the factory function
library.addBook(createBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"));
library.addBook(createBook("1984", "George Orwell", 1949, "Science Fiction"));
library.addBook(createBook("Pride and Prejudice", "Jane Austen", 1813, "Romance"));
library.addBook(createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction"));
library.addBook(createBook("Moby-Dick", "Herman Melville", 1851, "Adventure"));

// Demonstrating the library methods
console.log("All book titles:");
console.log(library.getAllTitles());

console.log("\nBooks published after 1900:");
console.log(library.filterBooksByYear(1900).map(book => book.getInfo()));

console.log("\nTotal number of books:", library.getTotalBooks());

console.log("\nAverage publication year:", library.getAveragePublicationYear().toFixed(2));