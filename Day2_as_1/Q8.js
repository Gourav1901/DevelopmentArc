// Calculate Total Expenses:
// Sum up the amount values from all expense items to get the total expenses.
// Output Format:
// Return a single number that represents the total expenses incurred.
function calculateTotalExpenses(expenses){
  let total = expenses.reduce((crr,acc)=> crr+acc.amount,0);
  return total;
}


const expenses = [
  { name: "Food", amount: 50 },
  { name: "Transportation", amount: 30 },
  { name: "Internet", amount: 45 },
  { name: "Groceries", amount: 80 }
];

// Output
const greaterAmmount = expenses.reduce((curr,acc)=>{
  if(acc.amount > curr){
    return acc.amount
  }
  else {
    return curr
  }
},0)
console.log(greaterAmmount,"greater")
const totalExpenses = calculateTotalExpenses(expenses);
console.log(totalExpenses); 