function UniqueString(strings) {
  return strings.reduce((acc, crr) => {
    acc[crr] = (acc[crr] || 0) + 1;
    return acc;
  }, {});
}

const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];

console.log(UniqueString(strings));

//Q2

function Product(numbers) {
  return numbers.reduce((acc, num) => {
    if (num % 3 === 0 || num % 5 === 0) {
      return acc + num;
    } else {
      return acc;
    }
  }, 0);
}

const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

console.log(Product(numbers));

//Q3

function palindrom(words) {
  return words.filter((e) => {
    const rev = e.split("").reverse();
    const stri = rev.join("");
    return e === stri;
  });
}

const words = [
  "racecar",
  "hello",
  "deified",
  "world",
  "level",
  "programming",
  "radar",
  "civic",
  "javascript",
];

console.log(palindrom(words));

// Q4

function findPath(filePaths) {
  return filePaths.filter((e) => {
    return (
      e.substring(e.length - 3) === "jpg" || e.substring(e.length - 3) === "png"
    );
  });
}

const filePaths = [
  "/images/pic1.jpg",
  "/images/pic2.png",
  "/assets/img/background.jpg",
  "/assets/img/logo.png",
  "/downloads/document.pdf",
  "/downloads/image.png",
  "/downloads/image.jpg",
];

console.log(findPath(filePaths));

function reve(shabd) {
  return shabd.map((e) => {
    return e.split("").reverse().join("");
  });
}

const shabd = [
  "Hello",
  "world",
  "this",
  "is",
  "an",
  "example",
  "array",
  "of",
  "strings",
];

console.log(reve(shabd));

function countWords(sentences) {
  sentences.forEach((e, i) => {
    let count = 0;
    for (let i = 0; i < e.length; i++) {
      if (e[i] == " ") {
        count += 1;
      }
    }
    console.log(`this sentence has ${count + 1} words`);
  });
}

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "I have a dream that one day this nation will rise up.",
  "To be or not to be, that is the question.",
  "In the beginning, God created the heavens and the earth.",
];

console.log(countWords(sentences));

function sumodds(nums) {
  return nums
    .filter((e) => e % 2 != 0)
    .map((e) => e ** 2)
    .reduce((sum, curr) => curr + sum, 0);
}

const nums = [1, 2, 3, 4, 5, 7];
const result = sumodds(nums);
console.log(result);




let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};

let students = [
  { id: 1, name: "Prateek", subjectID: 5 },
  { id: 2, name: "Yogesh", subjectID: 2 },
  { id: 3, name: "Nrupul", subjectID: 4 },
  { id: 4, name: "Prateek", subjectID: 1 },
];


newObj = {};

students.forEach((e) => {
  const { name, subjectID } = e;
  const subjectName = subjectsHash[subjectID];
  if (newObj[name]) {
    newObj[name].push(subjectName)
  }
  else {
    newObj[name] = [subjectName]
  }
});

console.log(newObj)


//Q8




let prateekMarksData = {
  name: "Prateek",
  subject1: "Javascript",
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90,
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
};

let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Python",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95,
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
};

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];

function massagedData(allStudentsMarksData) {
  return allStudentsMarksData.map((studentData) => {
    const { name } = studentData;
    let marks = [];

    for (let i = 1; i <= 5; i++) {
      const subject = studentData[`subject${i}`];
      const score = studentData[`marks${i}`];

      if (subject && score !== null) {
        marks.push({ subject, score });
      }
    }

    return { name, marks };
  });
}

const output = massagedData(allStudentsMarksData);
console.log(JSON.stringify(output, null, 2))

// Q10


function countingVoter(voters) {
 return voters.reduce(
  (acc,voter)=>{
  if(voter.age <=20){
    acc.numYoungPeople += 1;
    if(voter.voted){
      acc.numYoungVotes += 1;
    }
  }
    else if(voter.age > 20 && voter.age <=45){
      acc.numMidsPeople += 1;

    
    if(voter.voted){
      acc.numMidVotesPeople += 1;
    }
  } else if(voter.age>45){
          acc.numOldsPeople += 1;
          if(voter.voted) acc.numOldVotesPeople += 1;
  }

 return acc;
  
 },
{
  numYoungVotes: 0,
  numYoungPeople: 0,
  numMidVotesPeople: 0,
  numMidsPeople: 0,
  numOldVotesPeople: 0,
  numOldsPeople: 0,
}
);
}
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];


console.log(countingVoter(voters));

