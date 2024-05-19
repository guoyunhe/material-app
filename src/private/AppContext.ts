import { createTheme } from '@mui/material';
import { createContext } from 'react';
import { AppConfig, AuthStatus } from '../types';

export const lightTheme = createTheme({ palette: { mode: 'light' } });
export const darkTheme = createTheme({ palette: { mode: 'dark' } });

export const defaultConfig: AppConfig = {
  themePreference: 'system',
  setThemePreference: () => null,
  toggleThemePreference: () => null,
  themeMode: 'light',
  theme: lightTheme,
  lightTheme,
  darkTheme,
  languages: [],
  authStatus: AuthStatus.Unknown,
  setAuthStatus: () => null,
  authToken: null,
  setAuthToken: () => null,
  user: null,
  setUser: () => null,
  loginPath: '/login',
  loginRedirectPath: '/',
  logoutRedirectPath: '/',
};

export const AppContext = createContext<AppConfig>(defaultConfig);
