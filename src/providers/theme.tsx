import React, { createContext, useState } from 'react';

type Theme = 'dark' | 'light';

interface ColorSet {
  primary: string;
  secondary: string;
  text: string;
  gradient: string;
};

export const ThemeColors = new Map<Theme, ColorSet>([
  ['dark', {primary: 'bg-gray-600', secondary: 'bg-gray-800', text: 'text-gray-300', gradient: 'linear-gradient(to top, #283E51, #0A2342)'}],
  ['light', {primary: 'bg-blue-500', secondary: 'bg-gray-200', text: 'text-black', gradient: 'linear-gradient(to top, #f3904f, #3b4371)'}],
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
