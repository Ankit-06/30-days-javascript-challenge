//! Activity 1: Object creation and access

/* Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.*/
const bookObj = {
    title: 'Book Title',
    author: "Book Author",
    year: 2024
}
console.log(bookObj);


/* Task 2: Access and log the title and author properties of the book console.*/
console.log(bookObj.title);
console.log(bookObj.author);

//! Activity 2: Object Methods

/* Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.*/

bookObj.accessTitle = function () {
    return `Title is: ${this.title} and  author is: ${this.author}`
}

console.log(bookObj.accessTitle());

/* Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.*/

bookObj.updateYear = function (year) {
    this.year = year;
}
bookObj.updateYear(2020);
console.log(bookObj.year);

//! Activity 3: Nested Objects

/* Task 5: Create a nested object represting a library with properties like name and books (an array of book objects), and log the library object to the console.*/
const libraryObj = {
    name: "Library name",
    books: [{
        title: 'Book Title1',
        author: "Book Author1",
        year: 2020
    }, {
        title: 'Book Title2',
        author: "Book Author2",
        year: 2021
    }, {
        title: 'Book Title3',
        author: "Book Author3",
        year: 2022
    }]
}

console.log(libraryObj);

/* Task 6: Access and log the name of the library and the titles of all the books in the library.*/
console.log(libraryObj.name);
libraryObj.books.forEach(book => console.log(book.title))

//! Activity 4: The this keyword

/* Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.*/
libraryObj.accessTitleYear = function () {
    return this.books.map(book => `Book title is : ${book.title} and year is ${book.year}`)
}

console.log(libraryObj.accessTitleYear());


//! Activity 5: Object Iteration

/* Task 8: Use a for in loop to iterate over the properties of the book object and log each property and its value.*/

for (let book in bookObj) {
    console.log(`key: ${book} , value: ${bookObj[book]}`);
}

/* Task 9: Use Object.keys and Objects.value methods to log all the keys and values of the book object.*/
console.log(Object.keys(bookObj));
console.log(Object.values(bookObj));