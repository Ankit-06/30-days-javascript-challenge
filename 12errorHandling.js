//! Activity 1: Basic error handling with try-catch

/* Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.*/

const throwsError = () => {
    throw "This is custom error";
}

try {
    throwsError();
} catch (err) {
    console.log(err);
}

/* Task 2: Write a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.*/
const divide = (num1, num2) => {
    if (num2 === 0) throw "Denominator can't be 0."

    return num1 / num2;
}
try {
    console.log(divide(6, 0));
} catch (err) {
    console.log(err);
}

//! Finally Block

/* Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try,catch, and finally blocks to observe the execution flow. */

try {
    divide(10, 5);
    console.log("Try block executed");
} catch (err) {
    console.log(err);
    console.log("Catch block executed");
} finally {
    console.log("Finally block will always be executed");
}
try {
    divide(10, 0);
    console.log("Try block executed");
} catch (err) {
    console.log(err);
    console.log("Catch block executed");
} finally {
    console.log("Finally block will always be executed");
}

//! Activity 3: Custom error objects

/* Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block. */

class customError extends Error {

    constructor(message) {
        super(message);
        this.name = this.constructor.name; //Assigns the class name(customError) as name property
        this.message = message;
    }
}


function customClassError() {
    throw new customError("This is a custom error")
}

try {
    customClassError();
} catch (err) {
    if (err instanceof customError) {
        console.log("custom error msg:::", err.message);
        console.log("custom error name:::" + err.name);
    } else {
        console.log('err::');
    }
}

/* Task 5: Write a function that validates user input (e.g, checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block. */

function validateUserInput(userMsg) {
    if (!userMsg) throw "User msg can't be empty";
}
try {
    validateUserInput('')
} catch (err) {
    console.log(err);
}

//! Activity 4: Error Handling in Promises

/* Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console. */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.round(Math.random())) {
            resolve("Promise resolved");
        } else {
            reject("Promise rejected");
        }
    }, 1000)
})
promise.catch(err => console.log(err));

/* Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message. */

async function consumePromise() {
    try {
        await promise;
    } catch (err) {
        console.log('err:::', err);
    }
}
consumePromise();

//! Activity 5: Graceful Error Handling in Fetch

/* Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console. */

fetch('http://localhost:12343/invalid-path').catch(() => console.log("Failed to fetch data from invalid-url."))

/* Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message to the console. */

const invalidUrlFetch = async () => {
    try {
        await fetch('http://localhost:12343/invalid-path')
    } catch (err) {
        console.log("Failed to fetch data from invalid-url inside async function.")
    }
}
invalidUrlFetch()