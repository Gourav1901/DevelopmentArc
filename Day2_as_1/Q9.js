function sortStudentsByCondition(students){
 let asc =   [...students].sort((a,b) => b.age - a.age);
 let desc = [...students].sort((a,b) => a.age - b.age);

 return {ascending:asc , descending:desc};
}




const students = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 23 },
  { name: "David", age: 20 }
];



const sortedStudents = sortStudentsByCondition(students );
console.log(sortedStudents);