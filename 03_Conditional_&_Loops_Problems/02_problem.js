// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display the result with the specified sign. 
// Sample numbers : 3, -7, 2
// Output : The sign is -

const prompt = require("prompt-sync")()

const num1 = Number(prompt("Enter the first number: = "))
const num2 = Number(prompt("Enter the second number: = "))
const num3 = Number(prompt("Enter the third number: = "))

const product = num1 * num2 * num3;


if (product > 0) {
    console.log("the sign is positive (+)");
} else if (product < 0){
    console.log("the sign is negative (-)");
} else {
    console.log("the sign is neither (+) nor (-)");
}