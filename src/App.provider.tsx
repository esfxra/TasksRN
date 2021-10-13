import React, {createContext, useContext, useReducer} from 'react';

import {appReducer} from './lib/appReducer';
import {AppState, AppContextType} from './types';

interface AppProviderProps {
  children: React.ReactNode;
}

const initialState: AppState = {
  tasks: [],
};

const initialContext: AppContextType = {
  ...initialState,
  dispatch: () => {},
};

const AppContext = createContext(initialContext);

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppProvider({children}: AppProviderProps) {
  const [appState, appDispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{tasks: appState.tasks, dispatch: appDispatch}}>
      {children}
    </AppContext.Provider>
  );
}
