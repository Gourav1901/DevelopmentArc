function calculate(num1,num2){
  function operation(num1,num2,callback){
    return callback(num1,num2)
  }


const add = (a,b) => a + b
const multiply = (a,b) => a*b


const additionRes = operation(num1,num2,add)
const multiplication = operation(num1,num2,multiply)

console.log(`add of ${num1} $ ${num2} is ${additionRes}`)
console.log(`multiple of ${num1} $ ${num2} is ${multiplication}`)


}


calculate(4,5)
calculate(5,6)