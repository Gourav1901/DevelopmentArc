function employeeInformation(employees){
  const {name:secondEmployeeName,department:secondEmployeeDepartment} = employees[1]

  return {secondEmployeeName,secondEmployeeDepartment};
}


//Average Salary: Define a function averageSalary that takes an array of employee objects, 'employees', as a parameter. Calculate the average salary of all employees using destructuring and a for-of-loop. Return the average salary.

function averageSalary(employees){
  let totalsalary = 0 
  for(const {salary} of employees){
    totalsalary += salary; 
  }
  const avg = totalsalary/employees.length;
  return avg;
}

//Third Employee Info: Define a function thirdEmployeeInfo that takes an array of employee objects, 'employees', as a parameter. Extract the name, age, and salary of the third employee and assign them to variables 'thirdEmployeeName', 'thirdEmployeeAge', and 'thirdEmployeeSalary'. Calculate a bonus of 10% on the salary. Return a string in the format "Employee: , Age: , Salary: , Bonus: ".


function thirdEmployeeInfo(employess){
  const {name:thirdEmployeeName, age:thirdEmployeeAge,salary:thirdEmployeeSalary} = employees[2];

  const bonus = thirdEmployeeSalary * 0.1;

  return `Employee: ${thirdEmployeeName}, Age:${thirdEmployeeAge},Salary:${thirdEmployeeSalary}, bonus:${bonus}`;
     

}

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
console.log(employeeInformation(employees));
console.log(averageSalary(employees));
console.log(thirdEmployeeInfo(employees)); 








