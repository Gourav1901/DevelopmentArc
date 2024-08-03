function UniqueString(strings){
  return strings.reduce((acc,crr) =>{ 
      acc[crr] = (acc[crr] || 0) +1;
      return acc; 
  },{}
  
  );
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




