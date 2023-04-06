/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/


// function sayHello (name) {
//    alert(`Hello ${name}`);
// } sayHello ("Motto");

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

// function getFullName (firstName, lastName) {
//       fullName = firstName + " " +lastName;
//       return fullName;
// } 
// getFullName ("Chirag", "Gaur");

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
// let sum = 0;
// function addTwoNumbers (firstNum,secondNum) {

//   if (firstNum == isNaN(true) && secondNum == isNaN(true) ) { // doubt 

//         alert (" Enter Valid Input ");
//     }
//     sum = firstNum + secondNum;
//     alert (sum);

// } addTwoNumbers (+prompt ("type first number") ,+prompt ("type second number"));

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

// let output = 0;

// function calc (numA,numB,operation) {

//     if (operation === "add") {
//         output = numA + numB; 
//         console.log(output); 

//     } else if (operation === "sub" && numA > numB) {
//           output = numA - numB;
//           console.log(output); 

//     } else if (operation === "mul") {
//           output = numA * numB;
//           console.log(output); 

//     } else if (operation === "div" && numA > numB) {
//           output = numA / numB;
//           console.log(output); 
//     } else {
//          alert ("numA should be greater than numB");
//     }

// } calc (+prompt (" Type first number "), +prompt (" Type second number "), prompt ("choose operation from : add, sub, mul, div "));


/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year is leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

// function isLeapYear (year) {
//     if (year % 4 === 0) {
//        return true;

//     } else {
//       return false;
//     }

// } 
// let output = isLeapYear (+prompt (" check year is leapyear or not! "));
// console.log (output);

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

// let factorial = 1;
// function getFactorial (num) {
//   for (let i = num; i >= 1; --i) {
//       factorial *= i;
//   }
//     alert (`factorial of  ${num} is  ${factorial}`);       

// } getFactorial (+prompt (" get factorial of number !"));