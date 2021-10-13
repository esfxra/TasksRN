/**
 * Task structure
 */
export interface Task {
  id: string;
  name: string;
  complete: boolean;
}

/**
 * Provider and reducer
 */
export interface AppContextType extends AppState {
  dispatch: AppDispatch;
}

export interface AppState {
  tasks: Task[];
}

export type AppAction =
  | {type: 'Init'; payload: InitPayload}
  | {type: 'AddTask'; payload: AddTaskPayload}
  | {type: 'EditTask'; payload: EditTaskPayload}
  | {type: 'CompleteTask'; payload: CompleteTaskPayload}
  | {type: 'DeleteTask'; payload: DeleteTaskPayload};

type AppDispatch = (action: AppAction) => void;

interface InitPayload {
  state: AppState;
}

interface AddTaskPayload {
  id: string;
  name: string;
  category: string;
}

interface EditTaskPayload {
  id: string;
  name?: string;
  category?: string;
}

interface CompleteTaskPayload {
  id: string;
  complete: boolean;
}

interface DeleteTaskPayload {
  id: string;
}
