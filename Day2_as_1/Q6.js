// Prompt the user to input a list of numbers separated by spaces. Implement a function that uses the map HOF to double each number and display the transformed array.

// Implementation Instructions
// Use prompt or similar input methods to collect the user's input as a string of numbers separated by spaces.
// Convert the input string into an array of numbers using split(' ') and map(Number) to ensure they are treated as numbers.
// Use the map function to double each number in the array.
// Display the resulting array.


// Edge Cases to Consider
// Empty input: If the user provides an empty string, return an empty array.
// Non-numeric input: Handle cases where the input contains non-numeric values by filtering them out before applying the map function.

function doubleNumbers(input) {
  if (!input.trim()) return [];
  
  const numbers = input.split(' ').map(Number).filter(n => !isNaN(n));
  const doubled = numbers.map(num => num * 2);
  
  return doubled;
}

const userInput = prompt("Enter a list of numbers separated by spaces:");
console.log(doubleNumbers(userInput));
 


// Ask the user for a list of integers separated by commas. Create a function that uses the filter HOF to extract even numbers from the input and display them.

// Implementation Instructions
// Collect the user's input as a comma-separated string of numbers.
// Convert the string into an array using split(',') and map(Number).
// Use the filter function to keep only even numbers.
// Display the filtered array.

// Edge Cases to Consider
// Empty input: Return an empty array if the user provides no input.
// Non-numeric input: Filter out non-numeric values before applying the filter function.


function filterEvens(input) {
  if (!input.trim()) return [];
  
  const numbers = input.split(',').map(Number).filter(n => !isNaN(n));
  const evens = numbers.filter(num => num % 2 === 0);
  
  return evens;
}

const useInput = prompt("Enter a list of integers separated by commas:");
console.log(filterEvens(useInput));


// Prompt the user for a series of numbers separated by semicolons. Implement a function that uses the reduce HOF to calculate the sum of the numbers and display the result.

// Implementation Instructions
// Collect the user's input as a semicolon-separated string.
// Convert the string into an array using split(';') and map(Number).
// Use the reduce function to sum all the numbers in the array.
// Display the sum.

// Edge Cases to Consider
// Empty input: Return 0 if no input is provided.
// Non-numeric input: Filter out non-numeric values before applying the reduce function.


function sumNumbers(input) {
  if (!input.trim()) return 0;
  
  const numbers = input.split(';').map(Number).filter(n => !isNaN(n));
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  
  return sum;
}

const usrInput = prompt("Enter a series of numbers separated by semicolons:");
console.log(sumNumbers(usrInput));
