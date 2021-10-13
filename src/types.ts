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
  | {type: 'EditTaskName'; payload: EditTaskNamePayload}
  | {type: 'ToggleTaskComplete'; payload: ToggleTaskCompletePayload}
  | {type: 'DeleteTask'; payload: DeleteTaskPayload};

type AppDispatch = (action: AppAction) => void;

interface InitPayload {
  state: AppState;
}

interface AddTaskPayload {
  id: string;
  name: string;
}

interface EditTaskNamePayload {
  id: string;
  name: string;
}

interface ToggleTaskCompletePayload {
  id: string;
}

interface DeleteTaskPayload {
  id: string;
}

/**
 * Navigation
 */
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  AddTask: undefined;
  EditTask: {taskId: string};
};

export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

export type AddTaskProps = NativeStackScreenProps<StackParamList, 'AddTask'>;

export type EditTaskProps = NativeStackScreenProps<StackParamList, 'EditTask'>;