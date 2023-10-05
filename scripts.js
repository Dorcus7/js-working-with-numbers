/********************** Exercise 1  **********************/
// Describe the following code:

let wholesalePrice = 5.45;
let retailPrice = 9.99;
let quantity = 47;
let salesTotal = retailPrice * quantity;
let profit = salesTotal - (wholesalePrice * quantity);

// Where might this code be used?
//at wholesale store;

// Run this code and log the profit variable in the console. What answer do you get?

// How would you change this code to make the value of the quanitity variable dynamic?
//by creating an array.
//create a prompt that asks the user what the quantity is



console.log(profit);


/********************** Exercise 2 - Operators **********************/
// Step 1: Calculate the sum of two numbers and log the result.
let num1 = 10;
let num2 = 5;




// Step 2: Calculate the difference between two numbers and print the result.


// Step 3: Calculate the product of two numbers and print the result.


// Step 4: Calculate the result of dividing two numbers and print the result. Handle division by zero.


// Step 5: Check if a given number is even and print the result.

console.log(num1 + num2);
console.log(num1 - num2); 
console.log(num1 * num2);
console.log(num1 / num2); 
console.log(num1 % num2 === 0); 


/********************** Exercise 3 - Decades Calculator **********************/
// Store your current age into a variable.
// Store a maximum age into a variable (10 years older than you are now).
// Store an estimated number of meals you should eat per day (as a number).
// Calculate how many you would eat total for the next decade.
// Output the result to the screen like so: "You will need [AMOUNT] meals to last you until the age of [AGE]".

let currentAge = 25;
let maxAge = currentAge + 10;
let mealsPerDay = 3;
let totalMeals = (maxAge - currentAge) * 365 * mealsPerDay;





/********************** Exercise 4 - PEMDAS **********************/
// You are working on an education app and you want to be able to provide the average scores for students.
// Here are the stored variables for a student and their subjects.



let mathScore = 90;
let scienceScore = 85;
let englishScore = 80;
let historyScore = 95;

// How would you get the average of their scores using JavaScript?

let averageScore = (mathScore + scienceScore + englishScore + historyScore) / 4;
console.log(`The average score is: ${averageScore}`);





/********************** Exercise 5 - Weather Converter **********************/
// Write a calculation that converts celsius to fahrenheit. To get the value of fahrenheit, you have to multiply the celsius value by 9/5 and then add 32. 



// Prompt the user for the value of the temperature in celcius. 

// Run the code so that the following is logged to the console: 25°C is equal to 77°F

let celsius = prompt('Enter temperature in Celsius:');
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);


/********************** Exercise 6 - Assigning Values  **********************/

// Prompt the user for two numbers.

// Make sure that the values of the variables (the strings) are converted to numbers. 

// Create a new variable, add the numbers, and log the value.

// Reassign the variable to store the values of the numbers being substracted. Log the value.

// Add 100 to the variable. Log the value.

// Divide the value of the variable by 20. Log the value.


let num3 = parseFloat(prompt('Enter the first number:'));
let num4 = parseFloat(prompt('Enter the second number:'));
let result = num3 + num4;
console.log(`Sum: ${result}`);
result -= num1;
console.log(`Subtraction: ${result}`);
result += 100;
console.log(`After adding 100: ${result}`);
result /= 20;
console.log(`After dividing by 20: ${result}`);





/********************** Exercise 7 - Math Object  **********************/
let decimalNumber = 7.8;
// Given the above variable, how would you round the value to the nearest whole number (using the Math object)?

// Console log the output to check your work.

let roundedNumber = Math.round(decimalNumber);
console.log(`Rounded number: ${roundedNumber}`);



/********************** Exercise 8 - Math Object  **********************/
// Dice Game
// Create a variable that stores the value of a random number between 1 and 6


// Alert the user of the random number.

let randomNumber = Math.floor(Math.random() * 6) + 1;
alert(`Random number: ${randomNumber}`);




/********************** Exercise 9 - NaN  **********************/
let result1 = 0 / 0;
let result2 = "hello" * 5;
let result3 = parseInt("abc");

// Log the above variables in the console. What is the output?

// Without changing the below code, how could you write some new code between the variable declarations and the log, so that the answer is logged to the console? Use JavaScript number tools, please—don't reassign a number directly, as in: `wordVersion = 4`.



console.log(result1); 
console.log(result2); 
console.log(result3);


// Look up the isNaN() operator in MDN. What does it do? How would you use it?
console.log(isNaN(result1));
console.log(isNaN(result2)); 
console.log(isNaN(result3)); 
