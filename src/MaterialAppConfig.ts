import { Theme } from '@mui/material';

export interface LanguageOption {
  value: string;
  label: string;
}

export interface MaterialAppConfig {
  themes: {
    dark: Theme;
    light: Theme;
  };
  languages: LanguageOption[];
}
