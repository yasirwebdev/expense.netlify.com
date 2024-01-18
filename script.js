// PART 1
// let counter = 0;

// Write a function to increment a number 
// function counterIncrement(){
// counter = counter + 1;
// console.log(counter);
// }

// get the button refferal
// const plusButton = document.querySelector("#addButton");

// listen to Click Events
// plusButton.addEventListener("click", counterIncrement, false);


// ======================================================================

// PART 2
// let totalExpense = 0;
// function counterIncrement(){
//   const amountUsed = document.querySelector("#number").value;
//   console.log({amountUsed});
//   totalExpense = totalExpense + Number(amountUsed);
//   console.log({totalExpense});
//   document.querySelector("#totalExpense").textContent = `Total Expense: ${totalExpense}`;
//   }
// document.querySelector("#totalExpense").textContent = `Total Expense: ${totalExpense}`;


// get the button refferal
// const plusButton = document.querySelector("#addButton");

// listen to Click Events
// plusButton.addEventListener("click", counterIncrement, false);

// ======================================================================

// PART 3
// let counter = 0;
// let totalExpense = 0;

// get total element reference
// const totalElement = document.querySelector("#totalExpense");
// get totalDesc element reference
// const totalDescElement = document.querySelector("#desc");
// get amountUsed element reference
// const amountUsedElement = document.querySelector("#number");

// function counterIncrement(){
//   const amountUsed = Number(amountUsedElement.value);
//   const amountDesc = totalDescElement.value;
//   console.log({amountUsed, amountDesc});

//   totalExpense = totalExpense + amountUsed;
//   console.log({totalExpense});
//   totalElement.textContent = totalExpense;
//   }
//   totalElement.textContent = totalExpense;

// get the button refferal
// const plusButton = document.querySelector("#addButton");

// listen to Click Events
// plusButton.addEventListener("click", counterIncrement, false);


// ======================================================================

// PART 4
let totalExpense = 0;

// get total element reference
const totalElement = document.querySelector("#totalExpense");
// get totalDesc element reference
const totalDescElement = document.querySelector("#desc");
// get amountUsed element reference
const amountUsedElement = document.querySelector("#number");

// all expenses in one place
const allExpenses = []

function counterIncrement(){
  const expenseItems = {};

  const amountUsed = Number(amountUsedElement.value);
  const amountDesc = totalDescElement.value;
  console.log({amountUsed, amountDesc});

  totalExpense = totalExpense + amountUsed;
  console.log({totalExpense});
  totalElement.textContent = totalExpense;
  
  expenseItems.desc = amountDesc;
  expenseItems.amount = totalExpense;
  console.log(expenseItems);
  allExpenses.push(expenseItems);
  }
  totalElement.textContent = totalExpense;

// get the button refferal
const plusButton = document.querySelector("#addButton");

// listen to Click Events
plusButton.addEventListener("click", counterIncrement, false);