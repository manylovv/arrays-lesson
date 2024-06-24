import { describe, it, expect, beforeEach } from 'vitest';
import { addTask, removeTask, completeTask, editTaskTitle } from './todos';
import { useState } from './react';

describe('Task management functions', () => {
  let tasks;
  let setTasks;

  beforeEach(() => {
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

    [tasks, setTasks] = useState(initialTasks);
  });

  it('should add a new task', () => {
    addTask('New Task', tasks);

    expect(tasks).toContainEqual({ title: 'New Task', done: false });
  });

  it('should remove a task', () => {
    removeTask('Wash dishe', tasks);

    expect(tasks).not.toContainEqual({
      title: 'Wash dishe',
      done: false,
    });
  });

  it('should complete a task', () => {
    completeTask('Read a book', tasks);

    const task = tasks.find((task) => task.title === 'Read a book');
    expect(task.done).toBe(true);
  });

  it('should edit a task title', () => {
    editTaskTitle('Read a book', 'Read a novel', tasks);

    const task = tasks.find((task) => task.title === 'Read a novel');
    expect(task).toBeDefined();
    expect(task.title).toBe('Read a novel');
  });
});
