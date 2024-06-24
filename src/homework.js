// const tempsByYears = await Bun.file('./1924-2024.json').json();

// const getMonthsTempsByYear = (year) => {
//   let year = 1924;

//   for (let i = 0; i < tempsByYears.length; i++) {
//     console.log(year, tempsByYears[i]);

//     year++;
//   }

//   // return [ 7, 33, 10, 20, -13, 21, -17, 0, -8, 4, 33, -8 ]
// };

// getMonthsTempsByYear(1925);

const listAllTasks = () => {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task.done) {
      console.log('✅', task.title);
    } else {
      console.log('-', task.title);
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
      console.log('✅', doneTask.title);
    }
  }
  // list one by one, should list only if task is done
  // "✅": "Task title"
};
