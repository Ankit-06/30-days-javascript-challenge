//! Activity 1: Arithmetic Operations

/* Task 1: Write a program to add two numbers and log the result to the console. */
const sum = (num1, num2) => num1 + num2;
console.log(sum(5, 10));

/* Task 2: Write a program to subtract two numbers and log the result to the console. */
const sub = (num1, num2) => num1 - num2;
console.log(sub(15, 10));

/* Task 3: Write a program to multiply two numbers and log the result to the console. */
const mul = (num1, num2) => num1 * num2;
console.log(mul(15, 10));

/* Task 4: Write a program to divide two numbers and log the result to the console. */
const div = (num1, num2) => num1 / num2;
console.log(div(15, 5));

/* Task 5: Write a program to remainder two numbers and log the result to the console. */
const rem = (num1, num2) => num1 % num2;
console.log(rem(15, 4));

//! Activity 2: Assignment Operators

/* Task 6: Use the += operator to add a number to a variable and log the result to the console. */
let num = 12;
num += 8;
console.log(num);

/* Task 7: Use the -= operator to subtract a number to a variable and log the result to the console. */
let num1 = 12;
num1 -= 8;
console.log(num1);

//! Activity 3: Comparison Operators

/* Task 8: Write a program to compare two numbers using > and < and log the result to the console. */

console.log(1 > 2);
console.log(3 < 4);

/* Task 9: Write a program to compare two numbers using >= and <= and log the result to the console. */
console.log(0 >= null); //true
console.log(0 > null); //false
console.log(0 == null); //false

console.log(null <= undefined); //false
console.log(null < undefined); //false
console.log(null == undefined); //true

/* Task 10: Write a program to compare two numbers using == and === and log the result to the console. */
console.log(2 == '2');
console.log(2 === '2');

//! Activity 4: Logical Operators 

/* Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console. */
if (2 > 1 && 3 < 12) console.log('This line will execute if all conditions are true.');

/* Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console. */
if (3 < 2 || 2 > 1) console.log('This line will execute if atleast one condition is true.');

/* Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console. */
if (!false) console.log('!(not) converts the false->true and true->false');

//! Activity 5: Ternary Operators 

/* Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.*/
const number = 12;
number >= 0 ? console.log(`${number} is a positive number.`) : console.log(`${number} is a negative number.`);

//! Feature Request

/* 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operaions (addition,subtraction,multiplication,division,remainder) on two numbers and logs the results.*/

const arithmeticOperationsScript = (num1, num2) => {
    console.log(`Addition of ${num1} and ${num2} is : ${num1 + num2}`);
    console.log(`Subtraction of ${num1} and ${num2} is : ${num1 - num2}`);
    console.log(`Multiplication of ${num1} and ${num2} is : ${num1 * num2}`);
    console.log(`Division of ${num1} and ${num2} is : ${num1 / num2}`);
    console.log(`Remainder of ${num1} and ${num2} is : ${num1 % num2}`);
}

arithmeticOperationsScript(15, 4);

/* 2. Comparision and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results. */

const comparisionAndLogicalOperatorsScript = (num1, num2) => {
    console.log(`Is ${num1} > ${num2} : ${num1 > num2}`);
    console.log(`Is ${num1} < ${num2} : ${num1 < num2}`);
    console.log(`Is ${num1} <= ${num2} : ${num1 <= num2}`);
    console.log(`Is ${num1} >= ${num2} : ${num1 >= num2}`);
    console.log(`Is ${num1} == ${num2} : ${num1 == num2}`);
    console.log(`Is ${num1} === ${num2} : ${num1 === num2}`);
    console.log(`Is ${num1} > ${num2} && ${num1} === ${num2} : ${num1 > num2 && num1 === num2}`);
    console.log(`Is ${num1} > ${num2} || ${num1} === ${num2} : ${num1 > num2 || num1 === num2}`);
}

comparisionAndLogicalOperatorsScript(100, 20)

/* 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result. */

const positiveOrNegative = (num) => num >= 0 ? 'Positive' : 'Negative';
const digit = 10;
console.log(`${digit} is a ${positiveOrNegative(10)} number.`);