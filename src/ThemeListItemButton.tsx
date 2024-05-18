import { ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText } from '@mui/material';
import { ThemeIcon } from './private/ThemeIcon';
import { ThemeName } from './private/ThemeName';
import { useApp } from './useApp';

export interface ThemeListItemButtonProps extends ListItemButtonProps {
  messages?: {
    dark?: string;
    light?: string;
    system?: string;
  };
}

export function ThemeListItemButton({ messages, ...props }: ThemeListItemButtonProps) {
  const { themePreference, toggleThemePreference } = useApp();

  return (
    <ListItemButton color="inherit" {...props} onClick={toggleThemePreference}>
      <ListItemIcon>
        <ThemeIcon theme={themePreference} />
      </ListItemIcon>
      <ListItemText
        primary={messages?.[themePreference] || <ThemeName theme={themePreference} />}
      />
    </ListItemButton>
  );
}
