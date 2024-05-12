import { Theme } from '@mui/material';

/** Users' choice of theme preference */
export type ThemePreference = ThemeMode | 'system';

/** Actual applied theme mode */
export type ThemeMode = 'light' | 'dark';

export interface AppConfig {
  lightTheme?: Theme;
  darkTheme?: Theme;
  themePreference: ThemePreference;
  setThemePreference: (theme: ThemePreference) => void;
  themeMode: ThemeMode;
}
