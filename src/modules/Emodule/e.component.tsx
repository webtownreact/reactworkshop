import React, { createContext, useState } from 'react';
import { ThemeSwitcherComponent } from './theme-switcher.component';

export interface IThemeContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<IThemeContext>({ theme: 'dark', setTheme: () => {} });

export const Component = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeSwitcherComponent />
    </ThemeContext.Provider>
  );
};
