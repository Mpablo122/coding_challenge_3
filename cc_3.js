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

//"Task 3 - Employee Performance Tracking."

let employee = {
    name: "Jantrell Porter",
    role: "Data analyst",
    performancescore: 4,
    isActive: true
};

// adding a new property
employee.promotioneligible = true

// updated employee information 

let updated_employee = employee

console.log("Updated employee infpormation:", updated_employee)