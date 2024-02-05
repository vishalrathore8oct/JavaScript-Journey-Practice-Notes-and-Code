// write a javascript program that displays the largest integer among two integers.

const prompt = require("prompt-sync")()

const num1 = Number(prompt("Enter the first number: = "))
const num2 = Number(prompt("Enter the second number: = "))

if(num1 > num2){
    console.log(`first number ${num1} is greater`);
} else if (num2 > num1) {
    console.log(`second number ${num2} is greater`);
} else {
    console.log(`first number ${num1} and second number ${num2} are equals`);
}
