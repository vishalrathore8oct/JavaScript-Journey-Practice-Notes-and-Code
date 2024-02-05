// Write a JavaScript conditional statement to find the largest of five numbers, and Display the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

const prompt = require("prompt-sync")()

const num1 = Number(prompt("Enter the first number: = "))
const num2 = Number(prompt("Enter the second number: = "))
const num3 = Number(prompt("Enter the third number: = "))
const num4 = Number(prompt("Enter the fourth number: = "))
const num5 = Number(prompt("Enter the fifth number: = "))

let max1, max2, max3;

if (num1 > num2) {
    max1 = num1;
} else {
    max1 = num2;
}

if (num3 > num4) {
    max2 = num3;
} else {
    max2 = num4;
}

if (max1 > max2) {
    max3 = max1;
} else {
    max3 = max2;
}

if (max3 > num5) {
    console.log(`${max3} is greater`);
} else {
    console.log(`${num5} is greater`);
}



