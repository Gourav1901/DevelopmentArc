function calculateFinalGrades(students){
  return students 
  .map(student => {
    const sumOfScores = student.scores.reduce((sum,score) =>sum+score,0);

    const finalGrade = Math.round(sumOfScores / student.scores.length);

    return {
      name:student.name,
      id:student.id,
      finalGrade:finalGrade

    };
  })
  .filter(student => student.finalGrade >=70);
}


const students = [
  { id: 1, name: "Alice", scores: [85, 90, 92] },
  { id: 2, name: "Bob", scores: [70, 68, 72] },
  { id: 3, name: "Charlie", scores: [60, 65, 58] },
  { id: 4, name: "David", scores: [75, 80, 78] },
];
const passedStudents = calculateFinalGrades(students);
console.log(passedStudents);