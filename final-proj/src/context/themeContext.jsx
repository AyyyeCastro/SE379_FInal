import React, { createContext, useState } from 'react';

export const themes = {
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

export const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});


// reference: Live Coding II: Week 7
export const ThemeProvider = (props) => {
  const [chosenTheme, setTheme] = useState('light'); // default theme = light

  // get the theme by the selected option
  const theme = themes[chosenTheme];

  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

