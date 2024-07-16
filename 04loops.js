//! Activity 1: For loop

/* Task 1: Write a program to print numbers from 1 to 10 using a for loop. */
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/* Task 2: Write a program to print multiplication table of 5 using a for loop. */
const tableOf = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${tableOf} X ${i} = ${tableOf * i}`);
}

//! Activity 2: While loop

/* Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop. */
let sum = 0;
let s = 1;
while (s <= 10) sum += s++;
console.log(sum);

/* Task 4: Write a program to print numbers from 10 to 1 using a while loop. */
let num = 10;
while (num >= 1) console.log(num--);

//! Activity 3: Do While loop 

/* Task 5: Write a program to print numbers from 1 to 5 using a do while loop. */
let number = 1;

do {
    console.log(number++);
} while (number <= 5)

/* Task 6: Write a program to calculate the factorial of a number using a do while loop. */
let factorial = 1;
let digit = 7;

do {
    factorial *= digit--;
} while (digit >= 2)

console.log(factorial);

//! Activity 4: Nested loops 

/* Task 7: Write a program to print a pattern using nested for loops.*/

for (i = 0; i < 5; i++) {
    let pattern = ''
    for (j = 0; j <= i; j++) {
        pattern += '* '
    }
    console.log(pattern);
}

//! Activity 5: Loop control statements

/* Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement. */
let num1 = 1;
while (num1 <= 10) {
    if (num1 === 5) {
        num1++;
        continue
    };
    console.log(num1++);
}

/* Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement. */
let value = 1;

do {
    if (value === 7) break;
    console.log(value++);
} while (value <= 10)