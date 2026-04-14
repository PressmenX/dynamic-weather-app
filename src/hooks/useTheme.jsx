import { useEffect, useState } from 'react';

export default function useDarkTheme(status) {
  const [DarkMode, setDark] = useState(status);

  useEffect(() => {
    if (status) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [DarkMode]);

  
}
