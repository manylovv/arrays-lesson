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

const addTask = (taskTitle) => {
  // write your solution here
};

const removeTask = (taskTitle) => {
  // write your solution here
};

const completeTask = (taskTitle) => {
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

// --------- example:

listAllTasks();

addTask('Play with my dog');
removeTask('Read a book');

listAllTasks();

completeTask('Play with my dog');

listOnlyDoneTasks();
