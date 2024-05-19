import { Theme } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

/** Users' choice of theme preference */
export type ThemePreference = ThemeMode | 'system';

/** Actual applied theme mode */
export type ThemeMode = 'light' | 'dark';

export interface LanguageOption {
  value: string;
  label: string;
}

export enum AuthStatus {
  // Haven't been verified by back-end.
  Unknown = 'unknown',
  // The user has logged in.
  LoggedIn = 'logged_in',
  // The user has not logged in yet.
  NotLoggedIn = 'not_logged_in',
  // The user has manually logged out.
  LoggedOut = 'logged_out',
  // The authentication token expired.
  Expired = 'expired',
}

export interface AppConfig {
  theme: Theme;
  lightTheme: Theme;
  darkTheme: Theme;
  themePreference: ThemePreference;
  setThemePreference: Dispatch<SetStateAction<ThemePreference>>;
  toggleThemePreference: () => void;
  themeMode: ThemeMode;
  languages: LanguageOption[];
  authStatus: AuthStatus;
  setAuthStatus: (status: AuthStatus) => void;
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  user: any;
  setUser: (user: any) => void;
  loginPath: string;
  loginRedirectPath: string;
  logoutRedirectPath: string;
}
