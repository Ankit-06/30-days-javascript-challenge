//! Activity 1: Array creation and access

/* Task 1: Create an array of numbers from 1 to 5 and log the array to the console. */
const numArray = [1, 2, 3, 4, 5]
const numArray2 = new Array(1, 2, 3, 4, 5)
console.log(numArray);
console.log(numArray2);

/* Task 2: Access the first and last element of the array and log them to the console. */
const firstElement = numArray[0]
const lastElement = numArray[numArray.length - 1]
console.log(`First element is ${firstElement}`);
console.log(`Last element is ${lastElement}`);

//! Activity 2: Array Methods (Basic) 

/* Task 3: Use the push method to add a new number to the end of the array and log the updated array. */
const array = [1, 2, 3, 4, 5];
array.push(6)
console.log('array after push method: ', array);

/* Task 4: Use the pop method to remove a the last element from the array and log the updated array. */
array.pop()
console.log('array after pop method: ', array);

/* Task 5: Use the shift method to remove a the first element from the array and log the updated array. */
array.shift()
console.log('array after shift method: ', array);

/* Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array. */
array.unshift(1)
console.log('array after unshift method: ', array);


//! Activity 3: Array methods (Intermediate) 

/* Task 7: Use the map method to create a new array where each number is doubled and log the new array. */
const arr = [1, 2, 3, 4, 5];
const updatedArr = arr.map(e => e * 2)

console.log('arr after map method: ', updatedArr);

/* Task 8: Use the filter method to create a new array with only even numbers and log the new array. */
const filterArr = arr.filter(e => !(e % 2)) //if filter condition returns any truthy value then that element will be stored in the new array.
console.log(filterArr);

/* Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result. */
const reduceArray = [1, 4, 5, 2, 1, 5, 7, 7, 8, 2, 1]
const sum = reduceArray.reduce((acc, ele) => acc += ele, 0)
console.log(sum);

const removeDuplicate = reduceArray.reduce((acc, ele) => {
    if (!acc.includes(ele)) {
        acc.push(ele)
    }

    return acc;
}, []);

console.log(removeDuplicate);

//! Activity 4: Array iteration

/* Task 10: Use a for loop to iterate over the array and log each element to the console. */
const arr1 = [10, 9, 8, 7, 6, 5];
for (let i = 0; i < arr1.length; i++) console.log(arr1[i]);

/* Task 11: Use a forEach method to iterate over the array and log each element to the console. */
arr1.forEach(a => console.log(a));

//! Activity 5: Multi-domensional Arrays

/* Task 12: Create a two-dimensional array (matrix) and log the entire array to the console. */
const twoDArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
];

console.table(twoDArray);

/* Task 13: Access and log a specific element from the two-dimensional array. */
console.log(twoDArray[1][2]);