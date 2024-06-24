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

console.log("Iniatial Tasks", tasks);
console.log("-----------------------------------------");

const addTask = (taskTitle) => {
  const newTask = {
    title: taskTitle,
    done: false,
  };
  tasks.push(newTask);
  // write your solution here
};

const removeTask = (taskTitle) => {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (taskTitle === task.title) {
      tasks.splice(i, 1);
    }
  }
  // write your solution here
};
// removeTask("Read a book");
// console.log(tasks);

const completeTask = (taskTitle) => {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (taskTitle === task.title) {
      task.done = true;
    }
  }
  // write your solution here
};
// completeTask("Read a book");
// console.log(tasks);

const listAllTasks = () => {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task.done) {
      console.log("✅", task.title);
    } else {
      console.log("-", task.title);
    }
  }
  // write your solution here
  // list tasks one by one
  // if the task is done print
  //   "✅": "Task title"
  // if not print
  //   "-": "Task title"
};

const listOnlyDoneTasks = () => {
  for (let i = 0; i < tasks.length; i++) {
    const doneTask = tasks[i];
    if (doneTask.done) {
      console.log("✅", doneTask.title);
    }
  }
  // list one by one, should list only if task is done
  // "✅": "Task title"
};

const editTaskTitle = (taskTitle, updatedTaskTitle) => {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (taskTitle === task.title) {
      task.title = updatedTaskTitle;
      console.log(task);
    }
  }
  // write your solution here
};
// editTaskTitle("Read a book", "rere");
// console.log(tasks);

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
