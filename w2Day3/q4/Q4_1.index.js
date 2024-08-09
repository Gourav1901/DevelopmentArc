function codingScoreCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          
          const total = marks.reduce((sum, mark) => sum + mark, 0);
          const average = total / marks.length;
          
          
          if (average >= cutoff) {
              resolve(average);
          } else {
              reject("Sorry you haven’t cleared the coding round.");
          }
      }, 2000); 
  });
}



function HUKUMUScoreCheck(marks, cutoff){
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      const total  = marks.reduce((sum,cutoff)=> sum+cutoff,0);
      const average = total/marks.length


    if(average >= cutoff){
      resolve("congratulation")
    }
    else{
      reject("Sorry you haven’t cleared the coding round.");
    }

    },2000)
  })
}

// Example usage
const marks = [80, 90, 70, 85];
const cutoff = 75;

codingScoreCheck(marks, cutoff)
  .then(average => console.log(`Congratulations! Your average score is ${average}.`))
  .catch(error => console.log(error));


HUKUMUScoreCheck(marks,cutoff)
  .then(average => console.log(`Congratulations! You have clear the Interview`))
  .catch(error => console.log(`error`));
