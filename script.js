



let counter = 0;
let totalNumber = 0;



// Write a function to increment a number 
// function counterIncrement(){
// counter = counter + 1;
// console.log(counter);
// }


function counterIncrement(){
  const textBoxValue = document.querySelector("#number").value;
  console.log({textBoxValue});
  totalNumber = totalNumber + Number(textBoxValue);
  console.log({totalNumber});
  document.querySelector("#totalExpense").textContent = `Total Expense: ${totalNumber}`;
  }
document.querySelector("#totalExpense").textContent = `Total Expense: ${totalNumber}`;


// get the button refferal
const plusButton = document.querySelector(".addButton");

// listen to Click Events
plusButton.addEventListener("click", counterIncrement, false);


