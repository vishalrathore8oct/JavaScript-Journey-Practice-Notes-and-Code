// 3. Write a JavaScript conditional statement to sort three numbers in decending order, and Display the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

const prompt = require("prompt-sync")()

const num1 = Number(prompt("Enter the first number: = "))
const num2 = Number(prompt("Enter the second number: = "))
const num3 = Number(prompt("Enter the third number: = "))

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(`the decending order is ${num1} , ${num2} , ${num3} `);
    } else {
        console.log(`the decending order is ${num1} , ${num3} , ${num2} `);
    }
} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(`the decending order is ${num2} , ${num1} , ${num3} `);
    } else {
        console.log(`the decending order is ${num2} , ${num3} , ${num1} `);
    }
} else if (num3 > num2 && num3 > num1) {
    if (num2 > num1) {
        console.log(`the decending order is ${num3} , ${num2} , ${num1} `);
    } else {
        console.log(`the decending order is ${num3} , ${num1} , ${num2} `);
    }
}
 