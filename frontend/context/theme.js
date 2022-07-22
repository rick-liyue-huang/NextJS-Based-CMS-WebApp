import { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext();

/**
 * @define create context globally
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // firstly get the theme from localstorage
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
    }
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
