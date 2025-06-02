
// Step 1: Initialize Variables
let startupName = "TechSpark Solutions"; // Startup name
let initialCapital = 10000;              // Initial capital in dollars
let monthlyRevenue = 4000;               // Monthly revenue
let monthlyExpenses = 2500;              // Monthly expenses

// Step 2: Calculate Business Metrics
let netCashFlow = monthlyRevenue - monthlyExpenses;
let currentBalance = initialCapital + netCashFlow;
let isProfitable = netCashFlow > 0;

// Step 3: Print to Console
console.log("Startup Name:", startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status:", isProfitable);