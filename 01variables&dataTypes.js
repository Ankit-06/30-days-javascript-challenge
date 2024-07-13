//! Activity 1: Variable Declaration

/* Task 1 : Declare a varibale using var, assign it a number, and log the value to console. */
var x = 30;
console.log(x);

/* Task 2 : Declare a varibale using let, assign it a string, and log the value to console. */
let str = "This is a string";
console.log(str);

//! Activity 2: Constant Declaration

/* Task 3 : Declare a varibale using const, assign it a boolean, and log the value to console. */
const bool = true;
console.log(bool);

//! Activity 3: Data Types

/* Task 4 : Create variable of different data types (number,string,boolean,object,array) and log each variable's type using the typeof operator. */
let num1 = 52;
console.log(typeof num1);

let str1 = "this is string";
console.log(typeof str1);

let bool1 = true;
console.log(typeof bool1);

let obj1 = { name: "Testing" };
console.log(typeof obj1);

let arr1 = [52, "string", true, { name: "test" }];
console.log(typeof arr1);

//! Activity 4: Reassigning Variables

/* Task 5: Declare a variable using let, assign it an initial value, reassign a new value and log both values to the console. */
let msg = 'this is msg';
console.log(msg);
msg = 'this is updated msg';
console.log(msg);

//! Activity 5: Understanding const

/* Task 6: Try reassigning a variable declared with const and observe the error. */
const test = "018002"
// test = "asdncsd"
// console.log(test); //typeError: Assignment to constant variable


//! Feature Request:
/* 1. Variable Types Console log: Write a script that declares variables of different data types and logs both the value and type of each varaible to the console. */

function scriptToDeclareVariables() {
    let num = 52;
    console.log(`value: ${num} , type: ${typeof num}`);

    let str = "this is string";
    console.log(`value: ${str} , type: ${typeof str}`);

    let bool = true;
    console.log(`value: ${bool} , type: ${typeof bool}`);

    let obj = { name: "Testing" };
    console.log(`value: ${obj} , type: ${typeof obj}`);

    let arr = [52, "string", true, { name: "test" }];
    console.log(`value: ${arr} , type: ${typeof arr}`);
}
scriptToDeclareVariables();

/* 2. Reassignment Demo: Create a script that demonstrates the difference in behaviour between let and const when it comes to reassignment. */

function scriptReassignmentBehaviour() {
    let value = 'initial value of let type.';
    console.log(value);
    value = 'let type of variable can be reassigned.';
    console.log(value);

    const data = 'TypeError when reassigned';
    console.log(data);
    data = 'this will be error: TypeError';
    console.log(data);
}
scriptReassignmentBehaviour();