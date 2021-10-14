import React, {createContext, useContext, useState} from 'react';

import {lightTheme, darkTheme} from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const initialContext = {
  theme: lightTheme,
  toggleTheme: () => {},
};

const ThemeContext = createContext(initialContext);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({children}: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[theme],
        toggleTheme: () =>
          setTheme(state => (state === 'light' ? 'dark' : 'light')),
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
