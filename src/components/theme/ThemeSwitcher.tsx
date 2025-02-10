import React, { useEffect } from 'react';

import { ThemeAtom } from '../../store/jotai/theme.atom';
import { useAtom } from 'jotai';
import { Button } from 'primereact/button';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useAtom(ThemeAtom);

  const handleClick = () => {
    setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT');
  };

  useEffect(() => {
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      theme === 'LIGHT'
        ? themeLink.setAttribute(
            'href',
            '/src/assets/themes/lara-light-indigo.css',
          )
        : themeLink.setAttribute(
            'href',
            '/src/assets/themes/lara-dark-indigo.css',
          );
    }
  }, [theme]);

  return (
      <Button icon={`${ theme === 'LIGHT' ? "pi pi-sun" : "pi pi-moon"}`} rounded aria-label="Filter" onClick={handleClick} />
  );
};

export default ThemeSwitcher;
