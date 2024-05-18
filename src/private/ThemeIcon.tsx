import { BrightnessMedium, DarkMode, LightMode } from '@mui/icons-material';
import { ThemePreference } from '../types';

interface ThemeIconProps {
  theme: ThemePreference;
}

export function ThemeIcon({ theme }: ThemeIconProps) {
  switch (theme) {
    case 'light':
      return <LightMode />;
    case 'dark':
      return <DarkMode />;
    default:
      return <BrightnessMedium />;
  }
}
