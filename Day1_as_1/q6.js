// Custom splice function
function customSplice(array, start, deleteCount, ...itemsToAdd) {
  const result = array.slice(); // Copy the original array
  result.splice(start, deleteCount);
  if (itemsToAdd.length > 0) {
    result.splice(start, 0, ...itemsToAdd);
  }
  return result;
}

// Custom slice function
function customSlice(array, start, end) {
  const slicedArray = [];
  for (let i = start; i < (end || array.length); i++) {
    if (i < array.length) {
      slicedArray.push(array[i]);
    }
  }
  return slicedArray;
}

// Custom includes function
function customIncludes(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}

// Custom toLowerCase function
function customToLowerCase(str) {
  let lowerStr = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      lowerStr += String.fromCharCode(charCode + 32);
    } else {
      lowerStr += str[i];
    }
  }
  return lowerStr;
}

// Custom toUpperCase function
function customToUpperCase(str) {
  let upperStr = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      upperStr += String.fromCharCode(charCode - 32);
    } else {
      upperStr += str[i];
    }
  }
  return upperStr;
}

// Custom push function
function customPush(array, ...items) {
  let newLength = array.length;
  for (let i = 0; i < items.length; i++) {
    array[newLength] = items[i];
    newLength++;
  }
  return newLength;
}

// Custom pop function
function customPop(array) {
  if (array.length === 0) {
    return undefined;
  }
  const lastElement = array[array.length - 1];
  array.length = array.length - 1;
  return lastElement;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);

console.log("customSplice:", customSplice(arr, 2, 1, 'a', 'b')); // [1, 2, 'a', 'b', 4, 5]

console.log("customSlice:", customSlice(arr, 1, 4)); // [2, 3, 4]

console.log("customIncludes:", customIncludes(arr, 3)); // true
console.log("customIncludes:", customIncludes(arr, 6)); // false

const str = 'Hello World';
console.log("customToLowerCase:", customToLowerCase(str)); // 'hello world'
console.log("customToUpperCase:", customToUpperCase(str)); // 'HELLO WORLD'

console.log("customPush:", customPush(arr, 6, 7)); // 7
console.log("Array after customPush:", arr); // [1, 2, 3, 4, 5, 6, 7]

console.log("customPop:", customPop(arr)); // 7
console.log("Array after customPop:", arr); // [1, 2, 3, 4, 5, 6]
