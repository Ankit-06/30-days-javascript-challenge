//! Activity 1: Function Declaration 

/* Task 1: Write a function to check if a number is even or odd and log the result to the console. */
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd"
    }
}
const number = 1;
const isEvenOdd = checkEvenOdd(number)
console.log(`${number} is ${isEvenOdd}`);

/* Task 2: Write a function to calculate the square of a number and return the result. */
function sqaure(num) {
    return num * num
}

console.log(`sqaure of 4 is ${sqaure(4)}`);

//!Activity 2: Function Expression

/* Task 3: Write a function expression to find the maximum of two numbers and log the result to the console. */
const maxOfTwo = function (num1, num2) {
    num1 > num2 ? console.log(`${num1} is greater`) : console.log(`${num2} is greater`);
}

maxOfTwo(1, 2)

/* Task 4: Write a function expression to concatenate two strings and return the result. */

const concatenateStrings = function (str1, str2) {
    return str1 + " " + str2
}

console.log(concatenateStrings('I am', "Ankit"));

//! Activity 3: Arrow Functions

/* Task 5: Write an arrow function to calculate the sum of two numbers and return the result. */
const sumOfNums = (num1, num2) => num1 + num2
console.log(sumOfNums(4, 9));

/* Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value. */
const checkChar = (str, char) => {
    return str.includes(char)
}

console.log(checkChar('I am testing this string', 'n'));

//! Activity 4: Function Parameters and Default values

/* Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. */
const product = (num1, num2 = 10) => num1 * num2;
console.log(product(4));

/* Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age. */
const greeting = (name, age = 34) => `Hi ${name}, your age is ${age}.`
console.log(greeting('Luigi', 20));

//! Activity 5: Higher-Order Functions

/* Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times. */

const higherOrderFunction = (fun, calls) => {
    while (calls-- > 0) {
        fun();
    }
}

const normalFunction = () => console.log(`normalFunction is called.`);

higherOrderFunction(normalFunction, 5)


/* Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result. */

const hof = (fun1, fun2, value) => {
    const result = fun1(value);
    fun2(result);
}

const sumWith10 = (digit) => 10 + digit;
const doubleDigit = (digit) => console.log(2 * digit);

hof(sumWith10, doubleDigit, 5);