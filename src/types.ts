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
  | {type: 'Add'; payload: AddPayload}
  | {type: 'EditName'; payload: EditNamePayload}
  | {type: 'ToggleComplete'; payload: ToggleCompletePayload}
  | {type: 'Delete'; payload: DeletePayload};

type AppDispatch = (action: AppAction) => void;

interface InitPayload {
  state: AppState;
}

interface AddPayload {
  id: string;
  name: string;
}

interface EditNamePayload {
  id: string;
  name: string;
}

interface ToggleCompletePayload {
  id: string;
}

interface DeletePayload {
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
