import React, { useState } from 'react';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { ThemeContext } from '../contexts/theme.context';

export const Component = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeSwitcherComponent />
    </ThemeContext.Provider>
  );
};
