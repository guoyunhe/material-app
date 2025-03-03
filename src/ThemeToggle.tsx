import { IconButton, IconButtonProps } from '@mui/material';
import { ThemeIcon } from './private/ThemeIcon';
import { useThemeMode } from './useThemeMode';

export function ThemeToggle(props: IconButtonProps) {
  const [themeMode, , toggleThemeMode] = useThemeMode();

  return (
    <IconButton color="inherit" {...props} onClick={toggleThemeMode}>
      <ThemeIcon theme={themeMode} />
    </IconButton>
  );
}
