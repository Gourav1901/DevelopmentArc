function employeesInDepartment(employees, department){
  const filteredEmployees = employees.filter(employee => employee.department === department);

  const employeeNames = filteredEmployees.map(employee => employee.name);

  return employeeNames;
}


//Total Salary by Department: Define a function totalSalaryByDepartment that takes an array of employee objects, employees, and a string department as parameters. Calculate the total salary of all employees in the given department using the reduce function. Return the total salary.

function totalSalaryByDepartment(employees, department) {
  
  const totalSalary = employees.reduce((accumulator, employee) => {
      
      if (employee.department === department) {
         
          return accumulator + employee.salary;
      }
      
      return accumulator;
  }, 0); 
  
 
  return totalSalary;
}

function employeeSummary(employees) {
  // Use map to transform each employee object into a summary string
  return employees.map(employee => {
      return `Employee ${employee.name} works in ${employee.department} department and earns $${employee.salary} annually.`;
  });
}



const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
];

console.log(employeesInDepartment(employees, "Finance"));
console.log(totalSalaryByDepartment(employees,"finance"));
console.log(employeeSummary(employees));

