// 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// Student Name	Marks

// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68

// The grades are computed as follows :

// Range	Grade
// <60	      F
// <70	      D
// <80	      C
// <90	      B
// <100	      A

const prompt = require("prompt-sync")()

const num1 = Number(prompt("Enter the first number: = "))
const num2 = Number(prompt("Enter the second number: = "))
const num3 = Number(prompt("Enter the third number: = "))
const num4 = Number(prompt("Enter the fourth number: = "))
const num5 = Number(prompt("Enter the fifth number: = "))

const averageNumber = (num1 + num2 + num3 + num4 + num5)/5;

if (averageNumber < 60) {
    console.log("the grade is F");
} else if (averageNumber < 70) {
    console.log("the grade is D");
} else if (averageNumber < 80) {
    console.log("the grade is C");
} else if (averageNumber < 90) {
    console.log("the grade is B");
} else {
    console.log("the grade is A");
}