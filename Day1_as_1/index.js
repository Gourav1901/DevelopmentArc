function combiningArrays(fruits,vegetables){
  const groceries = [...fruits,...vegetables];
    
  return groceries;
   
}


const fruits =  ["apple", "banana","orange"];
const vegetables = ["carrot","broccoli","spinach"];
console.log(combiningArrays(fruits, vegetables));

