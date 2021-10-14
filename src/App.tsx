import React from 'react';

import AppProvider from './App.provider';
import ThemeProvider from './Theme.provider';
import AppNavigator from './App.navigator';

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </AppProvider>
  );
}
