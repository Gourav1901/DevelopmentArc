function combiningArrays(fruits,vegetables){
  const groceries = [...fruits,...vegetables];
    
  return groceries;
   
}


const fruits =  ["apple", "banana","orange"];
const vegetables = ["carrot","broccoli","spinach"];
console.log(combiningArrays(fruits, vegetables));


function cloningObjects(person) {
  personcopy = {...person};
  return personcopy;
}


const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person)); 



function mergingObjects(student,course) {
  studentWithCourse = {...student,...course};
  return studentWithCourse;
}


const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course));