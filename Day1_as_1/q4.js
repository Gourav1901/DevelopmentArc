function highestPaid(employees) {
  return employees.reduce((highest, current) =>{
    const {salary:highestSalary} = highest;
    const {salary:currentSalary} = current;
    return currentSalary > highestSalary ? current : highest;
  });
}
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees));