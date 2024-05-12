import { createTheme } from '@mui/material';
import { createContext } from 'react';
import { AppConfig } from './types';

export const lightTheme = createTheme({ palette: { mode: 'light' } });
export const darkTheme = createTheme({ palette: { mode: 'dark' } });

export const AppContext = createContext<AppConfig>({
  themePreference: 'system',
  setThemePreference: () => null,
  themeMode: 'light',
  lightTheme,
  darkTheme,
  languages: [],
});
