import { useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
