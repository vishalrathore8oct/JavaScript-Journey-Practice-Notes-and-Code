let prompt = require('prompt-sync')();
/*
Write a program to take three variables to store your birth date, birth month, 
and birth year, respec vely, and then print them one by one in a speciﬁed order.
************************************************************************************/
// let date,month,year;
// date=prompt("Enter your birth date :");
// month=prompt("Enter your birth month :");
// year=prompt("Enter your birth year :");
// console.log("your date of birth is\n  ",date,month,year);
/****************************************************************************************
2. Write a program to take input from the user, and then print it to the output.
*******************************************************************************************/
// z=prompt("Enter enything :");
// console.log("You entered -",z);
/******************************************************************************************
 Q3.Write a program to take two values from the user and swap them.
*******************************************************************************************/
// let a=prompt("Enter value of a:");
// let b=prompt("Enter value of b:");
// let c;
// c=a;
// a=b;
// b=c;
// console.log("Swaped value of a and b is :",a,b);
/********************************************************************************************************
 Write a program to take two numbers from the user and perform Six basic opera ons (addi on, subtrac on, mul plica on,
division, integer division and modulus) on those two numbers.
***********************************************************************************************************/ 
// let a,b,c,d,e,f;
// a=parseInt(prompt("Enter value of a :"));
// b=parseInt(prompt("Enter value of b :"));

// let sum=(a+b);
// let sub=a-b;
// let product=a*b;
// let div=a/b;
// let mod=a%b;

// console.log("sum is :",sum);
// console.log("Subtraction is :",sub);
// console.log("Multiply is :",product);
// console.log("Division is :",div);
// console.log("Modulo is :",mod);
/************************************************************************************************************
 Write a program to take two numbers A and B from the user and calculate the quo ent and remainder 
 when number A is divided by number B.
*******************************************************************************************************************/ 
// let a=parseInt(prompt("Enter value of A :"));
// let b=parseInt(prompt("Enter the value of B :"));
// let quetient,remainder;
// quetient=a/b;
// quetient=parseInt(quetient);
// remainder=a%b;
// console.log("your qouent and remainder is ",quetient,"and",remainder);
/************************************************************************************************************
Q 6:-Write a program to take a positive number from the user and then display the last digit of that number. 
*************************************************************************************************************/ 
// let a=parseInt(prompt("Enter any number :"));
// let lastDigit=a%10;
// console.log("Last digit of number is :",lastDigit);
/******************************************************************************************************
Write a program to convert a temperature from Celsius to Fahrenheit using the formula  C/5 = (F-32)/9 
********************************************************************************************************/
// let c=parseInt(prompt("Enter temprature in celcius :"));
// let f=(c*9)/5+32;
// console.log("Temprature in fareignhiet is :",f); 
/*******************************************************************************************************
 Q-8:Write a program to take two inputs from the user and swap them without using a temporary or third variable.
**********************************************************************************************************/
//  let a=parseInt(prompt("Enter the value of num1 :"));
//  let b=parseInt(prompt("Enter the value of num2 :"));
//  a=a+b;
//  b=a-b;
//  a=a-b;
//  console.log("swaped value of num1 and num2 is ",a,b);
/*************************************************************************************************************
Q.9 :-Write a program to take two numbers, A and B from the user. Your task is to ﬁnd the largest number
 that is less than A and can be divided evenly by B. Can you ﬁgure out that number? 
***********************************************************************************************************/ 
// let a=parseInt(prompt("Enter num1 :"));
// let b=parseInt(prompt("Enter num2 :"));
// let r=a%b;
// let f=a-r;
// console.log("Figure out number is :",f);
/*********************************************************************************************************
Q10:-Write a program to take two numbers from the user and determine the greater of those two given numbers. 
************************************************************************************************************/ 
// let a=parseInt(prompt("Enter num1 :"));
// let b=parseInt(prompt("Enter num2 :"));
// if (a>b){
//     console.log("Greater number is ",a);
// }
// else{
//     console.log("Greater number is ",b);
// }
/***********************************************************************************************************
Q.11:-Write a program to take a number from the user and print that number as Odd or Even.
*************************************************************************************************************/
// let a=parseInt(prompt("Enter your number :"));
// if (a%2===0) {
//     console.log("Entered number is Even");
// }
// else{
//     console.log("Entered number is Odd");
// }
/************************************************************************************************************
Q.12 :-Write a program to take a number from the user and output whether that number is nega ve, posi ve or zero.
**************************************************************************************************************/
// let a=parseInt(prompt("Enter a number :"));
// if (a==0) {
//     console.log("Entered number is Zero");
// } 
// else if (a>0) {
//     console.log("Entered number is Positive number .");
// } else {
//     console.log("Entered number is negative number.");
// }
/****************************************************************************************************************
Q.13: Write a program to take an integer as input and print the smallest positive integer that is a 
 multiple of both 2 and n. 
*************************************************************************************************************************/
// let a=parseInt(prompt("Enter a number :"));
// if (a%2==0) {
//     console.log("the smallest positive integer that is ",a);
// }
// else{
//     a=a*2;
//     console.log("the smallest positive integer that is ",a);
// }
/*******************************************************************************************************************
Q.14 Write a program to take three numbers from the user and print the greater number of the three numbers.
 (Assume all three numbers are dis nct)
********************************************************************************************************************/ 
// let a=parseInt(prompt("Enter num1 :"));
// let b=parseInt(prompt("Enter num2 :"));
// let c=parseInt(prompt("Enter num3 :"));
// if (a>b && a>c) {
//     console.log(a,"is greater number.");
// }
// else if (b>a && b>c) {
//     console.log(b,"is greater  number.");
// } else {
//     console.log(c,"is greater number.");
// }
/*************************************************************************************************************************
15:- Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the
numbers are dis nct). 
***************************************************************************************************************************/ 
// let a=parseInt(prompt("Enter num1 :"));
// let b=parseInt(prompt("Enter num2 :"));
// let c=parseInt(prompt("Enter num3 :"));
// let d=parseInt(prompt("Enter num4 :"));

// if (a>b && a>c && a>d) {
//     console.log(a,"is greater number.");
// }
// else if (b>a && b>c && b>d) {
//     console.log(b,"is greater  number.");
// } else if (c>a && c>b && c>d){
//     console.log(c,"is greater number.");
// }else{
//     console.log(d,"is greater number.");
// }
/**************************************************************************************************************
Q.16:- Write a program to take a year from the user and output whether a given year is a leap year or not.
**************************************************************************************************************/ 
// let y=parseInt(prompt("Enter year :"));
// if (y%400==0) {
//     console.log(y,"is a leap year.");
// }
// if (y%4==0 && y%100!==0) {
//     console.log(y,"is a leap year.");
// } else {
//     console.log(y,"is a not leap year."); 
// }
/***************************************************************************************************************
 Q.17:-Write a program to take 3 numbers from the user and output the second max of 3 numbers.
****************************************************************************************************************/
//  let a=parseInt(prompt("Enter num1 :"));
//  let b=parseInt(prompt("Enter num2 :"));
//  let c=parseInt(prompt("Enter num3 :"));
//  let max=0,smax=0;
//  if (a>b) {
//     max=a;
//     smax=b;
//  }
//  else {
//    max=b;
//    smax=a;
//  }
//  if (c>max) {
//    smax=max;
//    max=c;
//  }
//  else if (c>smax){
//    smax=c;
//  }
 
//  console.log(smax);
/******************************************************************************************************************
Q.18-Write a program to take the basic salary of an employee and calculate its Gross salary according to the following:
(Gross salary
is the sum of basic salary, HRA, and DRA)
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95% 
***************************************************************************************************************/

// let salary=parseInt(prompt("Enter your salary :"));
// let totalSalary;
// if (salary<=10000) {
//   totalSalary=salary+(salary*20/100)+(salary*80/100);
// } 
// else if (salary<=20000) {
//   totalSalary=salary+(salary*25/100)+(salary*90/100);
// } 
// else if (salary>=20000) {
//   totalSalary=salary+(salary*30/100)+(salary*95/100);
// } 
// console.log(totalSalary);
/**************************************************************************************************************
Q.19-Write a program  to input electricity unit charges and calculate the total electricity bill according to the given condi on:
For the ﬁrst 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An addi onal surcharge of 20% is added to the bill
***************************************************************************************************************/ 
// let unit=parseInt(prompt("Enter your unit of electricity :"));
// let bill,totalBill;
// if (unit<=50) {
//   bill=0.50*unit;
// }
// else if (unit<=150) {
//   bill=0.75*(unit-50)+50*0.50;
// } 
// else if (unit<=250){
//   bill=(unit-150)*1.20+(100*0.75)+(50*0.50);
// }
// else if (unit>=250) {
//   bill=(unit-250)*1.50+(100*1.20)+(100*0.75)+(50*0.50);
// }
// totalBill=(bill*20/100)+bill;
// console.log(totalBill);
/**************************************************************************************************
Q.20- Write a program to take 4 numbers from the user and output the third max of these 4 numbers.
****************************************************************************************************/ 
// let a,b,c,d;
// a=parseInt(prompt("Enter num1 :"));
// b=parseInt(prompt("Enter num2 :"));
// c=parseInt(prompt("Enter num3 :"));
// d=parseInt(prompt("Enter num4 :"));
// let max=0,smax=0,tmax=0;
// if (a>b) {
//   max=a;
//   smax=b;
// }
// else{
//   max=b;
//   smax=a;
// }
// if (c>max) {
//   tmax=smax;
//   smax=max;
//   max=c;
// } 
// else if(c>smax) {
//   tmax=smax;
//   smax=c;
// }
// else {
//   tmax=c;
// }
// if(d>max){
//   tmax=smax;
//   smax=max;
//   max=d;
// }
// else if (d>smax) {
//   tmax=smax;
//   smax=d;
// }
//  else if (d>tmax){
//   tmax=d;
// }
// console.log("Third max is :",tmax);
/**************************************************************************************************************************
Q.21- Write a program to take 5 numbers from the user and print the frequency of every number.
Q.22- Take the number N and the name from the user as inputs, and print the name N  times.
*********************************************************************************************************************************/ 
// let name=prompt("Enter name :");
// let n=parseInt(prompt("Enter any number for n times print :"));
// for (let i = 1; i<=n;i++){
//   console.log(i+"-"+name);
// }
/*********************************************************************************************************************************
Q.23-Take a number N from the user as input, and print even numbers up to N.
**********************************************************************************************************************************/ 
// let n=parseInt(prompt("Enter last number for printing even number :"));
// for(let i=1; i<=n; i++){
//   if (i%2==0) {
//     console.log(i);
//   }
// }
/**************************************************************************************************************************************
Q.24-Write a program to print the sum of odd numbers up to N. 
*****************************************************************************************************************************************/ 
// let n=parseInt(prompt("Enter the last value of n :"));
// let sum=0;
// for (let i=1; i<=n; i++){
//   if (i%2!==0) {
//     sum+=i;
//   }
// }
// console.log(sum);
/*********************************************************************************************************************************************
Q.25-Write a program to take two integers M, and N and print the sum of numbers in the range M to N.
***************************************************************************************************************************************/
// let m=parseInt(prompt("Enter starting value :"));
// let n=parseInt(prompt("Enter last value for find sum :"));

// let sum=0;
// for(let i=m; i<=n; i++){
//   sum+=i;
// }
// console.log(sum);
/***************************************************************************************************************************************
Q.26-Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5
+…………1/N.
*******************************************************************************************************************************************/ 
// let n=parseInt(prompt("Enter the value of n :"));

// let sum=0;
// for(let i=1; i<=n; i++){
//   sum+=1/i;
// }
// console.log(sum.toFixed(2));
/*******************************************************************************************************************************************
Q.27- Write a program to take a number from the user and print the number of digits in the given number. 
(can you do it without loop O(1) ).
*********************************************************************************************************************************************/ 
// let n=parseInt(prompt("Enter a number :"));

// let count=0;
// while (n>0) {
//   n=Math.floor(n/10);
//   count+=1;
// }
// console.log("your number is",count,"digit number");
/*******************************************************************************************************************************************
Q.28-Write a program to take a number from the user and print the sum of the digits of the given number.
***********************************************************************************************************************************/
// let n=parseInt(prompt("Enter any number :"));

// let sum=0;
// while(n>0){
//   r=n%10;
//   sum+=r;
//   n=Math.floor(n/10);
// }
// console.log("Sum of digits is :",sum);
/*****************************************************************************************************************************************
Q.29- Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the
number.
****************************************************************************************************************************************/ 
// let num=parseInt(prompt("Enter a number :"));

// let rev=0,rem;
// while (num>0) {
//   rem=num%10;
//   rev=rev*10+rem;
//   num=Math.floor(num/10);
// }
// console.log(rev);
/*************************************************************************************************************************************
Q.31-Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is
only divisible by 1 and itself, and it doesn't have any other factors.
************************************************************************************************************************************/ 
// let num=parseInt(prompt("Enter a number :"));

// let count=0;
// for (let i=1 ;i<=num ;i++){
//   if (num%i==0) {
//     count+=1
//   }
// }
// if (count==2) {
//   console.log(num, "is a Prime number.");
// }
// else{
//   console.log(num,"is not a Prime number.");
// }
/***************************************************************************************************************************************
Q.32-Write a program to take a number from the user and then determine if that number is a special type of number called a
'perfect number'.
 A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself. Print
Yes if the number is a perfect number else print No.
*********************************************************************************************************************/
// let num=parseInt(prompt("Enter any number :"));

// let sum=0;
// for (let i=1; i<num; i++){
//     if (num%i==0){
//         sum+=i;
//     }
// }
// if (num==sum){
//     console.log(num ,"is a perfect number.");
// }
// else {
//     console.log(num,"is not a perfect number.");
// }
/************************************************************************************************************************************
Q.33-Write a program to print all the numbers from the given array using a loop.
L = {23, 45, 32, 25, 46,33, 71, 90}
*************************************************************************************************************************************/ 
// let L = [23, 45, 32, 25, 46,33, 71, 90]

// for (let i=0; i<L.length; i++){
//     console.log(L[i]);
// }
/***********************************************************************************************************************************
Q.34-Write a program to create an array of natural numbers  till 20 and print it.
**********************************************************************************************************************************/ 
// let arr=[];
// let n=parseInt(prompt("Enter last number :"));
// let num=0;
// for(let i=1; i<=n; i++){
//     num=i;
//     arr.push(num);
// }
// console.log(arr);
/*************************************************************************************************************************************
Q.35-Write a program to reverse the array and print the reversed array.
***************************************************************************************************************************************/ 
let arr=[];
let n=parseInt(prompt("Enter length of array :"));
for (let i=0; i<n; i++){
    let Element=parseInt(prompt("Enter element :"));
    arr.push(Element);
}

console.log("Original array :",arr);