// Step 1: Introduction to Arrays
// What array is?

// Step 2: Creating Arrays
// const arr = ["vanya", "artem", "alex"]

// Step 3: Accessing Array Elements
// Indexes are important because they allow you to retrieve and modify specific items in the array. They're like the address of each item in the list, helping you keep track of where everything is.

// When you're working with arrays in JavaScript, think of them as ordered lists. Each item in the list has a position, or index, starting from 0.

// So, if you have an array like [10, 20, 30, 40, 50], the number 10 is at index 0, 20 is at index 1, and so on. You can access these items by using their indexes like this: array[0] would give you 10, array[1] would give you 20, and so forth.

//           0   1   2   3   4
const arr = [10, 20, 30, 40, 50];

const thirdEl = arr[2];

// Step 4: Array Length

// Step 5: use for loop to iterate through an array

// Step 6: methods to mutate arrays, such as push, pop, shift, and unshift.

// indexOf()

// Step 7: sort, reverse

// __________EXERCISES____________

/* 1. Library Book Tracker:
Create an array to store book titles. Allow the user to add new books, remove books by title, and list all books in the library. */

const books = ['Harry Potter', 'The Little Prince', 'The Hobbit'];

const addNewBook = (bookTitle: string) => {
  // write your solution here
};

const removeBook = (bookTitle: string) => {
  // write your solution here
};

const listAllBooks = () => {
  // write your solution here
};

/* 1.5

Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.


The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll


*/

/* 2. Sum of Numbers: */

const numbers = [2, 342, 4102, 4953, 320];

const calculateSum = (array: number[]) => {
  // write your solution here
};

/* 3. Weather Data Analyzer:
Create an array to store daily temperature data. Allow the user to add temperatures, calculate the average temperature, and find the highest and lowest temperatures recorded. */

/* To-Do App



*/

const todos = [
  {
    title: 'Wash dishes',
    done: false,
  },
  {
    title: 'Read a book',
    done: false,
  },
  {
    title: 'Go to the walk',
    done: true,
  },
];

const addTask = (newTask: { title: string; done: boolean }) => {
  // write your solution here
};

const removeTask = (taskTitle: string) => {
  // write your solution here
};

const completeTask = (taskTitle: string) => {
  // write your solution here
};

const listAllTasks = () => {
  // write your solution here
  // list tasks one by one
  // if the task is done print
  //   "✅": "Task title"
  // if not print
  //   "-": "Task title"
};

const listOnlyDoneTasks = () => {
  // list one by one, should list only if task is done
};
