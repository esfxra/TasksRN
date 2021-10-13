import {AppState, AppAction, Task} from '../types';

export function appReducer(state: AppState, action: AppAction): AppState {
  // Add task
  if (action.type === 'AddTask') {
    const newTask: Task = {
      id: action.payload.id,
      name: action.payload.name,
      complete: false,
    };

    return {tasks: [...state.tasks, newTask]};
  }

  // Edit name
  if (action.type === 'EditTaskName') {
    const updatedTasks = state.tasks.map(task => {
      if (task.id === action.payload.id) {
        return {
          ...task,
          name: action.payload.name,
        };
      }

      return task;
    });

    return {tasks: updatedTasks};
  }

  // Toggle complete
  if (action.type === 'ToggleTaskComplete') {
    const updatedTasks = state.tasks.map(task => {
      if (task.id === action.payload.id) {
        return {
          ...task,
          complete: !task.complete,
        };
      }

      return task;
    });

    return {tasks: updatedTasks};
  }

  // Delete task
  if (action.type === 'DeleteTask') {
    const updatedTasks = state.tasks.filter(task => {
      return task.id !== action.payload.id;
    });

    return {tasks: updatedTasks};
  }

  return state;
}
