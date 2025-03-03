import { BrightnessMedium, DarkMode, LightMode } from '@mui/icons-material';
import { ThemeMode } from '../useThemeMode';

interface ThemeIconProps {
  theme: ThemeMode;
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
