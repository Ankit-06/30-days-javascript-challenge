//! Activity 1: Basic Event Handling

/* Task 1: Add a click even listener to a button that changes the text content of a paragraph.*/
const button = document.getElementsByTagName("button");
const para = document.getElementById("para");

button[0].addEventListener('click', () => para.textContent = "Text is updated");

/* Task 2: Add a double-click event listener to an image that toggles its visiblity. */
const img = document.querySelector('#hideImg');
img.addEventListener('dblclick', () => {
    img.style.display = "none";
})


//! Activity 2: Mouse Events

/* Task 3:Add a mouseover event listener to an element that changes its background color. */
para.addEventListener('mouseover', () => para.style.backgroundColor = "pink");

/* Task 4: Add a mouseout event listener to an element that resets its background color. */
para.addEventListener('mouseout', () => {
    if (para.style.backgroundColor === 'pink') {
        para.style.backgroundColor = 'transparent';
    }
});

//! Activity 3: Keyboard Events 

/* Task 5: Add a keydown event listener to an input field that logs the key pressed to the console. */
const inputBox = document.getElementsByName("input")
inputBox[0].addEventListener('keydown', () => console.log(inputBox[0].value));

/* Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.*/
const inputPara = document.querySelector('.inputPara');
inputBox[0].addEventListener('keyup', () => inputPara.textContent = inputBox[0].value);

//! Activity 4: Form Events

/* Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.*/
const htmlForm = document.querySelector('form')
htmlForm.addEventListener('submit', (event) => {
    document.querySelectorAll('form>input').forEach(input => {
        console.log(`${input.name} : ${input.value}`);
        input.value = '';
    });
    event.preventDefault();
});

/* Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph. */
const dropdown = document.getElementById('options');
dropdown.addEventListener('change', () => document.querySelector('#selectValue').textContent = `You have selected ${dropdown.value}`);

//! Activity 5: Event Delegation 

/* Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.*/
const list = document.querySelector('ul')
list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') console.log(event.target.textContent)
});

/* Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.*/
const addItemBtn = document.querySelector("#addItem");

addItemBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `new item`;
    list.append(li);
})

list.addEventListener('mouseover', (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = 'teal';
    }
})