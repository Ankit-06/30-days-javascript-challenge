//! Activity 1: Understanding promises

/* Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.*/
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This promise1 is resolved.")
    }, 2000);
})

promise1.then(msg => console.log(msg));

/* Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch() */
const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject("This promise2 is rejected.")
    }, 0)
})

promise2.catch(err => console.log(err));

//! Activity 2: Chaining Promises

/* Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.*/
const promise3 = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res('This promise3 is resolved.');
        }, 1000)
    })
}
const promise4 = (data) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(`${data} and This promise4 is resolved.`);
        }, 500)
    })
}
const promise5 = (data) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(`${data} and This promise5 is resolved.`);
        }, 500)
    })
}

promise3()
    .then(promise4) // this is same as .then(data => promise4(data))
    .then(promise5)
    .then(data => console.log(data));

//! Activity 3: Using Async/Await

/* Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.*/
const promiseResolved = async () => {
    const data = await promise1;
    console.log(`${data} inside async function`);
}
promiseResolved();

/* Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.*/
const promiseRejected = async () => {
    try {
        await promise2;
    } catch (err) {
        console.log(`${err} inside async function`);
    }
}
promiseRejected();

//! Activity 4: Fetching data from an API

/* Task 6: Use a fetch API to get data from a public API and log the response data to te console using promises.*/
fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(data => console.log(data))

/* Task 7: Use a fetch API to get data from a public API and log the response data to te console using async/await. */
const fetchTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const data = await response.json();
    console.log(data);
}
fetchTodo();

//! Activity 5: Concurrent Promises

/* Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values. */
Promise.all([promise1, promise3(), promise4(), promise5()])
    .then(values => {
        values.forEach(value => {
            console.log('###', value, '###');
        })
    }).catch(err => console.log(`@@@ ${err} @@@`)); //executes if any of the promise gets rejected

/* Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises. */
Promise.race([promise1, promise3(), promise5(), promise4()])
    .then(firstResolvedPromise => console.log(firstResolvedPromise))
    .catch(err => console.log(`*** ${err} ***`)) //executes if any of the promise gets rejected before anyone could get resolved.
