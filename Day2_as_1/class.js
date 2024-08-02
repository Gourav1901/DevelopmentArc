// for each does not return anything 
// map returns a array
//input for for each should be array

// for for each we have to use extra space

// for map it is inbuild 


//filter

// reduce means combine everything 

let sweets = ["sw1", "sw2" , "sw3","sw4","sw4"];

for(let i =0 ;i<sweets.length;i++){
  console.log(sweets[i])
}
console.log("-----------------")
sweets.forEach(function(e,i){
  console.log(i+1,e)
})


let numbers = [1,2,3,4,5]

numbers.forEach(function(e){
  console.log(e*2)
})

const arr = [3, 4, 5, 6, 7];

//Expected Output: 3 - 5 - 7

arr.forEach(function(e){
  if (e%2 !=0){
    console.log(e)
  }
})



