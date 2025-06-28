import { Theme } from '@mui/material';

export interface LanguageOption {
  value: string;
  label: string;
}

export interface MaterialAppConfig {
  activeTheme: Theme;
  themes: {
    dark: Theme;
    light: Theme;
  };
}
