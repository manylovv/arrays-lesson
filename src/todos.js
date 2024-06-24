import { useState } from './react';

const initialTasks = [
  {
    title: 'Wash dishe',
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

const [tasks, setTasks] = useState(initialTasks);

const addTask = (taskTitle) => {
  const newTask = {
    title: taskTitle,
    done: false,
  };
  tasks.push(newTask);
};

const removeTask = (taskTitle) => {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (taskTitle === task.title) {
      tasks.splice(i, 1);
    }
  }
};

const completeTask = (taskTitle) => {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (taskTitle === task.title) {
      task.done = true;
    }
  }
};

const editTaskTitle = (taskTitle, updatedTaskTitle) => {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (taskTitle === task.title) {
      task.title = updatedTaskTitle;
      console.log(task);
    }
  }
};

//// --- tests ----

console.log('tasks before', tasks);

addTask('new task');

console.log('tasks after', tasks);
