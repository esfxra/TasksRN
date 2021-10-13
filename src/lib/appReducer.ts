import {AppState, AppAction, Task} from '../types';

export function appReducer(state: AppState, action: AppAction): AppState {
  if (action.type === 'AddTask') {
    const newTask: Task = {
      id: action.payload.id,
      name: action.payload.name,
      complete: false,
    };

    return {tasks: [...state.tasks, newTask]};
  }

  return state;
}
