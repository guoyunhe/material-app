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
  const theme = themes?.[themeMode] || themes?.[systemColor];

  return (
    <MaterialAppContext.Provider
      value={{
        themes,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </MaterialAppContext.Provider>
  );
}
