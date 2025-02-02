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

// adding a new property and updating performancescore
employee.performancescore = 5;
employee.promotioneligible = true
// updated employee information 

let updated_employee = employee
console.log("Updated employee information:", updated_employee)

//  "Task 4 - Customer Feedback Records."

let feedback = [
    {customer: "Nick Lapasta", feedbackText:"Polite service", rating: 7},
    {customer: "Benny beer", feedbackText: "Very rude and impolite", rating: 2},
    {customer: "Gelo Ball", feedbackText:"Funny and lighthearted", rating: 8.5
    }];

// adding another cuustomer feedback and final output for task 4 
feedback.push({customer: "Frank Ocean", feedbackText: "Has good music taste", rating: 8});
console.log("Customer feedback", feedback);

//Task 5 Inventory Management
let inventory = {
    itemName: "Hp Omen",
    stockCount: 50,
    price: 1000,
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};
console.log("Details of stored inventory:", inventory);
console.log("Total Value of stored inventory:", inventory.calculateTotalValue());
