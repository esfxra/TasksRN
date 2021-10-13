import React from 'react';

import AppProvider from './App.provider';
import AppNavigator from './App.navigator';

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
