number = [2,3,4,5,65,71,52,63,457,8];

function filterArr(number,callback){
  ans = [];
  for(i = 0;i < number.length;i++){
    if(callback(number[i])){
      ans.push(number[i])
    }
  }
return ans;
}

function iseven(num){
  return num%2 == 0
}
const evenArr = filterArr(number,iseven);

console.log(`original array:${number}`);
console.log(`filtered array ${evenArr}`);