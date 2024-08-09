function codingScoreCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          // Calculate the average score
          const total = marks.reduce((sum, mark) => sum + mark, 0);
          const average = total / marks.length;
          
          // Check if the average score meets or exceeds the cutoff
          if (average >= cutoff) {
              resolve(average);
          } else {
              reject("Sorry you haven’t cleared the coding round.");
          }
      }, 2000); // 2 seconds delay
  });
}

// Example usage
const marks = [80, 90, 70, 85];
const cutoff = 75;

codingScoreCheck(marks, cutoff)
  .then(average => console.log(`Congratulations! Your average score is ${average}.`))
  .catch(error => console.log(error));
