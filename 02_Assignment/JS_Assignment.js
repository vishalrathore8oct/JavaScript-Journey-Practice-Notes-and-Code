/* 1. Create a javascript file, using javascript comments, List all the datatypes of Javascript, and specify an 
example for each of them. */

// 1. Number
const numberDataType = 1243;
// 2. Null 
const nullDataType = null;
// 3. Boolen 
const boolenDataType = true;
// 4. Bigint
const bigintDataType = 23904328329n;
// 5. String
const stringDataType = "hello sir";
// 6. Symbol 
const symbolDataType = Symbol(123);
// 7. Undefined
const undefinedDataType = undefined;
// 8. Array
const arrayDataType = [1, 2, 4];
// 9. Object
const objectDataType = { firstName: "vishal", lastName: "rathore" };
// 10. Function
const functionDataType = function hello() {
    console.log("Hello Function");
};

/* 2. Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.   */

const array2 = ["face wash", "shoes", "bike", "glasses", "watch", "braslet", "belt", "gun", "jacket", "shirt"];

/* 3. Create an object of a student registry of five students whose key is the registration number and the value is 
the student name. Registration number starts from 1 and continues.  
 */

const object2 = { 1: "vishal", 2: "sange", 3: "amit", 4: "abdul", 5: "abhishek" };

/* 4. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of 
value stored.   */

console.log("numberDataType =", typeof numberDataType);
console.log("nullDataType =", typeof nullDataType);
console.log("boolenDataType =", typeof boolenDataType);
console.log("bigintDataType =", typeof bigintDataType);
console.log("stringDataType =", typeof stringDataType);
console.log("symbolDataType =", typeof symbolDataType);
console.log("undefinedDataType =", typeof undefinedDataType);
console.log("arrayDataType =", typeof arrayDataType);
console.log("objectDataType =", typeof objectDataType);
console.log("functionDataType =", typeof functionDataType);

/* 5. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and 
error messages. */


// invalid variables 

/* const 1name = "vishal";
console.log(name1); */

//SyntaxError: Invalid or unexpected token


/* const last#Nmae = "rathore";
console.log(lastNmae); */

//SyntaxError: Missing initializer in const declaration

// valid variables

const name1 = "vishal";
console.log(name1);
const lastNmae = "rathore";
console.log(lastNmae);

/* 6. Write a program that prints the multiplication table in the textbook format of any number specified.  */

const tableNumber = 4;

console.log(`${tableNumber} * 1 = ${tableNumber * 1}`);
console.log(`${tableNumber} * 2 = ${tableNumber * 2}`);
console.log(`${tableNumber} * 3 = ${tableNumber * 3}`);
console.log(`${tableNumber} * 4 = ${tableNumber * 4}`);
console.log(`${tableNumber} * 5 = ${tableNumber * 5}`);
console.log(`${tableNumber} * 6 = ${tableNumber * 6}`);
console.log(`${tableNumber} * 7 = ${tableNumber * 7}`);
console.log(`${tableNumber} * 8 = ${tableNumber * 8}`);
console.log(`${tableNumber} * 9 = ${tableNumber * 9}`);
console.log(`${tableNumber} * 10 = ${tableNumber * 10}`);


/* 7. Write a program to perform all the arithmetic operations[except increment and decrement operators] of javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.   */

const num1 = 15;
const num2 = 2;

console.log(`the addition of ${num1} and ${num2} is = ${num1 + num2}`);
console.log(`the substaction of ${num1} and ${num2} is = ${num1 - num2}`);
console.log(`the multipication of ${num1} and ${num2} is = ${num1 * num2}`);
console.log(`the division of ${num1} and ${num2} is = ${num1 / num2}`);
console.log(`the moduler of ${num1} and ${num2} is = ${num1 % num2}`);
console.log(`the exponents of ${num1} and ${num2} is = ${num1 ** num2}`);

/* 8. Write a program to find out the perimeter of a rectangle. Print the results to the console.   */

const length = 10;
const width = 20;

console.log(`perimeter of rectangle is ${2 * (length + width)}`);

/* 9. Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified.  
*/

const num3 = 15;
const num4 = 2;
const num5 = 10;
const num6 = "10";
const num7 = 2;
const num8 = 10;


console.log(num4 == num7);
console.log(num3 == num4);

console.log(num5 === num8);
console.log(num5 === num6);

console.log(num5 <= num8);
console.log(num3 <= num8);

console.log(num3 >= num8);
console.log(num7 >= num5);

console.log(num5 != num8);
console.log(num3 != num8);

console.log(num5 !== num8);
console.log(num3 !== num8);

console.log(num4 < num5);
console.log(num5 < num4);

console.log(num3 > num5);
console.log(num5 > num3);

/* 10. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the 
traffic light is red print the vehicles must stop.  
*/

const trafficLight = "blue";
if (trafficLight == "red") {
    console.log("Red => Stop");
}
else if (trafficLight == "green") {
    console.log("Green => Go");
}
else if (trafficLight == "yellow") {
    console.log("Yello => Ready");
}
else {
    console.log("invalid input");
}


/* 11. Write a program to print the largest of 2 numbers */

const compareNum1 = 32;
const compareNum2 = 43;

if (compareNum1 > compareNum2) {
    console.log(`${compareNum1} is greater`);
}
else {
    console.log(`${compareNum2} is greater`);

}


/* 12. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible 
by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to 
the numbers divisible by 3 or 5.  
*/

const myNum = 15;

if (myNum % 3 == 0 && myNum % 5 == 0) {
    console.log("FizzBuzz");
}
else if (myNum % 3 == 0) {
    console.log("Fizz");
}
else if (myNum % 5 == 0) {
    console.log("Buzz");
}
else {
    console.log("invalid number");
}

/* 13. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.  
*/

const day = "saturday";

switch (day) {
    case "monday":
        console.log("there are 5 days untill weekend");
        break;
    case "tuesday":
        console.log("there are 4 days untill weekend");
        break;
    case "webnesday":
        console.log("there are 3 days untill weekend");
        break;
    case "thursday":
        console.log("there are 2 days untill weekend");
        break;
    case "friday":
        console.log("there are 1 days untill weekend");
        break;
    case "saturday":
    case "sunday":
        console.log("there are 0 days untill weekend");
        break;
    default:
        console.log("invalid input");
}

/* 14.  Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the 
year.  
*/

const yearNumber = 8;

switch (yearNumber) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;
    default:
        console.log("invalid input");
}


/* 15. Write a program that takes in a number and outputs whether it is positive, negative, or zero.  */

const myNum1 = 1;
myNum1 == 0?console.log("zero"):myNum1 < 0?console.log("negative"):console.log("positive");


/* 16. Create a program that takes in two numbers and prints the larger one.  */

const myNum2 = 13;
const myNum3 = 3;
myNum2 > myNum3 ?console.log(`${myNum2} is larger`):console.log(`${myNum3} is larger`);


/* 17. Write a program that generates the multiplication table in the textbook format for a given number.  */

const tableNum = 3;
for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} * ${i} = ${tableNum * i}`);
}


/* 18. Write a program that prints all the positive even numbers till the number specified.  */

const userNumber = 7;

for (let index = 1; index <= userNumber; index++) {
    if (index % 2 == 0) {
        console.log(index);
    } 
    
}
