// 7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

const prompt = require("prompt-sync")()

const num1 = Number(prompt("Enter the first number: = ")) 

for (let i = 0; i <= num1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} is FizzBuzz`);
    } else if (i % 3 == 0) {
        console.log(`${i} is Fizz`);
    } else if (i % 5 == 0) {
        console.log(`${i} is Buzz`);
    } else {
        console.log(i + "  Not a FIZZ, BUZZ OR FizzBuzz Number");
    }
}
