import { IconButton, IconButtonProps } from '@mui/material';
import { ThemeIcon } from './private/ThemeIcon';
import { useApp } from './useApp';

export function ThemeIconButton(props: IconButtonProps) {
  const { themePreference, toggleThemePreference } = useApp();

  return (
    <IconButton color="inherit" {...props} onClick={toggleThemePreference}>
      <ThemeIcon theme={themePreference} />
    </IconButton>
  );
}
