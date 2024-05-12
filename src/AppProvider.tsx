import { useStorage } from '@guoyunhe/react-storage';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import { AppContext } from './AppContext';
import { AppConfig, ThemePreference } from './types';

export interface AppProviderProps extends Pick<AppConfig, 'darkTheme' | 'lightTheme'> {
  children?: ReactNode;
}

export function AppProvider({ children, ...config }: AppProviderProps) {
  const [themePreference, setThemePreference] = useStorage<ThemePreference>('theme', 'system');
  const systemTheme = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  const themeMode = themePreference === 'system' ? systemTheme : themePreference;
  const theme = themeMode === 'dark' ? config.darkTheme : config.lightTheme;

  return (
    <AppContext.Provider value={{ ...config, themePreference, setThemePreference, themeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}
