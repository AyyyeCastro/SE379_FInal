import React, { createContext, useState, ReactNode } from 'react';

interface Theme {
  foreground: string;
  background: string;
  border: string;
  color?: string;
}

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const themes: { [key: string]: Theme } = {
  light: {
    foreground: '#242526',
    background: '#fff',
    border: '1px solid black',
  },
  dark: {
    foreground: '#fff',
    background: '#242526',
    border: '1px solid white',
    color: '#9fd3c7',
  },
  old: {
    foreground: '#ececec',
    background: '#385170',
    border: '1px solid white',
    color: '#ececec',
  },
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.light,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [chosenTheme, setTheme] = useState<string>('light'); // default theme = light

  // get the theme by the selected option
  const theme = themes[chosenTheme];

  const toggleTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
