import {AppState, AppAction, Task} from '../types';

export function appReducer(state: AppState, action: AppAction): AppState {
  // Add task
  if (action.type === 'Add') {
    const newTask: Task = {
      id: action.payload.id,
      name: action.payload.name,
      complete: false,
    };

    return {tasks: [newTask, ...state.tasks]};
  }

  // Edit name
  if (action.type === 'EditName') {
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
  if (action.type === 'ToggleComplete') {
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
  if (action.type === 'Delete') {
    const updatedTasks = state.tasks.filter(task => {
      return task.id !== action.payload.id;
    });

    return {tasks: updatedTasks};
  }

  return state;
}
