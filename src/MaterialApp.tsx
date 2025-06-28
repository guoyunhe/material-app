import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { MaterialAppConfig } from './MaterialAppConfig';
import { defaultConfig, MaterialAppContext } from './private/MaterialAppContext';
import { useSystemColor } from './useSystemColor';
import { useThemeMode } from './useThemeMode';

export interface MaterialAppProps extends Partial<MaterialAppConfig> {
  children?: ReactNode;
}

export function MaterialApp({ children, themes = defaultConfig.themes }: MaterialAppProps) {
  const [themeMode] = useThemeMode();
  const systemColor = useSystemColor();
  const activeTheme = themeMode === 'system' ? themes?.[systemColor] : themes?.[themeMode];

  return (
    <MaterialAppContext.Provider
      value={{
        activeTheme,
        themes,
      }}
    >
      <ThemeProvider theme={activeTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </MaterialAppContext.Provider>
  );
}
