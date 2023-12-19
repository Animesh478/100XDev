/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let expenses = {};
  for(let txn of transactions){
    expenses[txn.category] = (expenses[txn.category] || 0) + txn.price;
  };

  let output = [];
  for(let category of Object.keys(expenses)){
    output.push({category: category, totalAmountSpent: expenses[category]})
  };
  return output;
}
let transaction = [{itemName:'pen',category:'stationary', price:200}, {itemName:'pants',category:'dress', price:400}, {itemName:'pencil',category:'dress', price:200}];
console.log(calculateTotalSpentByCategory(transaction));

module.exports = calculateTotalSpentByCategory;
