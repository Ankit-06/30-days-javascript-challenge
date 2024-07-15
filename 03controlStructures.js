//! Activity 1: If-Else Statements

/* Task 1: Write a program to check if a number is positive, negative or zero, and log the result to the console. */
let number = -0;
if (number < 0) {
    console.log(`${number} is a negative number.`);
} else if (number === 0) {
    console.log(`${number} is zero.`);
} else {
    console.log(`${number} is a positive number.`);
}

/* Task 2: Write a program to check if a person is eligible to vote (age>=18), and log the result to the console. */
const age = 20;
if (age >= 18) {
    console.log(`Person is eligible to vote.`);
} else {
    console.log(`Person is not eligible to vote.`);
}

//! Activity 2: Nested If-Else statements

/* Task 3: Write a program to find the largest of three numbers using nested if-else statements. */
const num1 = 100;
const num2 = 120;
const num3 = 101;

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is the largest of three numbers.`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is the largest of three numbers.`);
} else {
    console.log(`${num3} is the largest of three numbers.`);
}

//! Activity 3: Switch Case

/* Task 4: Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console. */
const dayNum = 4;
const day = (dayNum) => {
    switch (dayNum) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thrusday";
        case 5: return "Friday";
        case 6: return "Satday";
        case 7: return "Sunday";
        default: return "Input correct value.";
    }
}
console.log(day(dayNum));

/* Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to console. */
const score = 85;
const grade = (score) => {
    switch (true) {
        case (score >= 80 && score <= 100): return "A";
        case (score >= 60 && score <= 79): return "B";
        case (score >= 40 && score <= 59): return "C";
        case (score >= 20 && score <= 39): return "D";
        case (score >= 0 && score <= 19): return "F";
        default: return "Invalid Score.";
    }
}
console.log(grade(score));

//! Activity 4: Conditional(Ternary) Operator 

/* Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console. */
const num = 21;
const isEvenOrOdd = (num % 2 === 0) ? "Even" : "Odd";
console.log(isEvenOrOdd);

//! Activity 5: Combining Conditions

/* Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console. */
const year = 2200;
const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? "leap Year" : "not leap year";
console.log(`${year} is ${isLeapYear}`);
