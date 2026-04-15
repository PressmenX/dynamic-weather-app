import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function DarkToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="bg-gray-200 h-6 w-6 rounded-full shadow shadow-black dark:text-white">
      {theme === 'dark' ? '☀︎' : '⏾'}
    </button>
  );
}
