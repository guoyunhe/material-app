import { ThemePreference } from '../types';

interface ThemeNameProps {
  theme: ThemePreference;
}

export function ThemeName({ theme }: ThemeNameProps) {
  switch (theme) {
    case 'light':
      return 'Light theme';
    case 'dark':
      return 'Dark theme';
    default:
      return 'System theme';
  }
}
