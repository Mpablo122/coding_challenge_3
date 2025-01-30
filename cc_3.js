//"Task 1 - Product Price Management."
let prices = [1.99, 2.99, 3.99, 4.99, 5.99];
prices.push (6.99);
console.log(prices);
prices.shift();
let updatedprice = prices;
console.log("Updated price after removing first value:", updatedprice);

//  "Task 2 - Modifying Customer Orders."
let quantities = [10, 20, 30, 40, 50];
quantities [2] += 5; //adding 5 to the third value
let total_quantities = quantities.reduce((sum, total)=> sum + total,0);

console.log("Total order count:", total_quantities); 