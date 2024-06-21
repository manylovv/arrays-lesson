/*
how to create new object in js:
 
const newTask = {
  title: 'some title',
  done: false
}

how to change a value in object:

newTask.title = "updated title"

newTask after update will look like that:

{
  title: 'updated title',
  done: false
}

*/

const tasks = [
  {
    title: "Wash dishe",
    done: false,
  },
  {
    title: "Read a book",
    done: false,
  },
  {
    title: "Go to the walk",
    done: true,
  },
];

const newTask = {
  title: "??? title",
  done: false,
};

const addTask = (taskTitle) => {
  tasks.push(taskTitle);
  // write your solution here
};
addTask(newTask);
console.log(tasks);

// const removeTask = (taskTitle) => {
//   for (let i = 0; i < tasks.length; i++) {
//     const task = tasks[i];
//     if (taskTitle === task.title) {
//       tasks.pop(taskTitle);
//       console.log(tasks);
//     }
//   }
//   // write your solution here
// };

// const completeTask = (taskTitle) => {
//   // write your solution here
// };

// const listAllTasks = () => {
//   for (let i = 0; i < tasks.length; i++) {
//     const task = tasks[i];
//     if (task.done) {
//       console.log("✅", task.title);
//     } else {
//       console.log("-", task.title);
//     }
//   }
//   // write your solution here
//   // list tasks one by one
//   // if the task is done print
//   //   "✅": "Task title"
//   // if not print
//   //   "-": "Task title"
// };

// const listOnlyDoneTasks = () => {
//   for (let i = 0; i < tasks.length; i++) {
//     const doneTask = tasks[i];
//     if (doneTask.done) {
//       console.log("✅", doneTask.title);
//     }
//   }
//   // list one by one, should list only if task is done
//   // "✅": "Task title"
// };

// const editTaskTitle = (taskTitle, updatedTaskTitle) => {
//   for (let i = 0; i < tasks.length; i++) {
//     const task = tasks[i];
//     if (taskTitle === task.title) {
//       tasks.splice(task.title, 1, updatedTaskTitle);
//       console.log(tasks);
//     }
//   }
//   // write your solution here
// };

// --------- example:

// listAllTasks();

// addTask("Play with my dog");

/* todos after adding task: 
[
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
  {
    title: 'Play with my dog',
    done: false
  }
];
*/

// removeTask("Read a book");

/* todos after adding task: 
[
  {
    title: 'Wash dishes',
    done: false,
  },
  {
    title: 'Go to the walk',
    done: true,
  },
  {
    title: 'Play with my dog',
    done: false
  }
];
*/

// completeTask("Play with my dog");

/* todos after adding task: 
[
  {
    title: 'Wash dishes',
    done: false,
  },
  {
    title: 'Go to the walk',
    done: true,
  },
  {
    title: 'Play with my dog',
    done: true
  }
];
*/

// listOnlyDoneTasks();

// should print to the console
// ✅: Go to the walk
// ✅: Play with my dog

// editTaskTitle("Wash dishe", "Wash dishes");
