//! Activity 1: Teplate Literals

/* Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.*/
const personName = "Ankit", age = 24;
const str = `My name is ${personName}, and age is ${age}`;
console.log(str);

/* Task 2: Create a multi-line string using template literals and log it to the console.*/
const multiLineStr = `
    This is first Line.
    This is second Line.
    This is third Line.
`;

console.log(multiLineStr);

//! Activity 2: Destructuring 

/* Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. */
const [first, second] = [1, 2];
console.log(first, second);

/* Task 4: Use object destructuring to extract the title and author from a book object and log them to the console. */
const { title, author } = { title: "Book title", author: "Book author" }
console.log(`Title is: ${title},author is: ${author}`);

//! Activity 3: Spread and Rest operators 

/* Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. */
const existingArray = [1, 2, 3, 4, 5];
const newArray = [...existingArray, 6, 7]
console.log(newArray);

/* Task 6: Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result. */
const sumNumbers = (...arr) => arr.reduce((acc, curr) => acc += curr);
console.log(sumNumbers(3, 2, 1));

//! Activity 4: Default Parameters

/* Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. */
const defaultParam = (num1, num2 = 1) => num1 * num2;
console.log(defaultParam(5));
console.log(defaultParam(5, 10));

//! Activity 5: Enhanced Object Literals

/* Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.*/
let myName = "Ankit"
let myAge = "20"
function accessProperties() {
    console.log(this.myName);
    console.log(this.myAge);
}
const enhanceObejct = { myAge, myName, accessProperties } //restructing
enhanceObejct.accessProperties()
console.log(enhanceObejct);

/* Task 9: Create an Object with computed property names based on variables and log the object to the console.*/
const key1 = 'Title';
const key2 = 'Author';
const value1 = 'This is book title';
const value2 = 'This is book author';

const obj = {
    [key1]: value1,
    [key2]: value2
}

console.log(obj);