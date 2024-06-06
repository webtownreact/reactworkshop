import React, { useContext } from 'react';
import { ThemeContext } from './e.component';

export const ThemeSwitcherComponent = () => {
  const theme = useContext(ThemeContext);

  return <h1 onClick={() => theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark')}>{theme.theme}</h1>;
};
