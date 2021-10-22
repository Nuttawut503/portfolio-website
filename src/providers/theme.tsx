import React, { createContext, useState } from 'react';

type Theme = 'dark' | 'light';

interface ColorSet {
  primary: string;
  secondary: string;
  text: string;
}

export const ThemeColor = new Map<Theme, ColorSet>([
  ['dark', {primary: 'bg-gray-600', secondary: 'bg-gray-800', text: 'text-gray-300'}],
  ['light', {primary: 'bg-blue-500', secondary: 'bg-gray-200', text: 'text-black'}],
]);

interface ThemeContent {
  theme: Theme;
  toggleTheme: () => any;
};

export const ThemeContext = createContext<ThemeContent>({theme: 'light', toggleTheme: () => {}});

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => setTheme(theme === 'light'? 'dark': 'light');

  return (
    <ThemeContext.Provider value={{ theme,  toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
