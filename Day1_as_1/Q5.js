function CountCalculation(school){
  const {
     departments:{
      math:{teachers:mathTeacherCount, students:mathStudentCount},
      history:{teachers:historyTeacherCount,students:historyStudentCount}
     }
  } = school;

  return {
    mathTeacherCount,
    mathStudentCount,
    historyTeacherCount,
    historyStudentCount
  };
}


function findTopStudent(school, math){
  const topStudent = school.students.reduce((top,current) =>  {
    const {scores:{[math]:topScore}} = top;
    const {scores:{[math]:currentScore}} = current;

    return currentScore > topScore ? current:top;
  });
  return JSON.stringify(topStudent, null, 2);
}

function addNewDept(school, newDepartment) {
  // Destructure the existing departments from the school object
  const { departments, ...rest } = school;

  // Add the new department using the spread operator
  const updatedDepartments = {
    ...departments,
    ...newDepartment
  };

  // Return the updated school object
  return {
    ...rest,
    departments: updatedDepartments
  };
}

function highestStudentCountDepartment(school) {
  // Destructure departments from school object
  const { departments } = school;

  // Initialize variables to keep track of the department with the highest count
  let highestDept = '';
  let maxStudents = 0;

  // Iterate over the departments to find the one with the highest student count
  for (const [deptName, { students }] of Object.entries(departments)) {
    if (students > maxStudents) {
      maxStudents = students;
      highestDept = deptName;
    }
  }

  return highestDept;
}

const greetings = {
  English: "Hello",
  Spanish: "¡Hola",
  French: "Bonjour"
};


function generateGreeting(name, language = 'English') {
  
  const greeting = greetings[language] || greetings['English'];
  
  return `${greeting}, ${name}!`;
}








const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};

const newDepartment = {
  art: { teachers: 2, students: 50 }
};

console.log(CountCalculation(school));
console.log(findTopStudent(school,'math'));
console.log(addNewDept(school, newDepartment));
console.log(highestStudentCountDepartment(school));
console.log(generateGreeting("Alice")); 
console.log(generateGreeting("Bob", "Spanish")); 
console.log(generateGreeting("Charlie", "French")); 