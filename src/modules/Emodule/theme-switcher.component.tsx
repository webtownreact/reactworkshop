import React, { useContext, useState } from 'react';
import { ThemeContext } from './e.component';

export const ThemeSwitcherComponent = () => {
  const theme = useContext(ThemeContext);
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <h1 onClick={() => theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark')}>{theme.theme}</h1>
    </div>
  );
};
