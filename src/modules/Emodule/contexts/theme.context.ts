import { createContext } from 'react';
import { IThemeContext } from '../interfaces/theme-context.interface';

export const ThemeContext = createContext<IThemeContext>({ theme: 'dark', setTheme: () => {} });
