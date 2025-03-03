import { useLocalStorage } from '@guoyunhe/react-storage';
import { useLatestCallback } from '@guoyunhe/use-latest-callback';

export type ThemeMode = 'light' | 'dark' | 'system';

export function useThemeMode() {
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>('theme_mode', 'system');

  const toggleThemeMode = useLatestCallback(() => {
    setThemeMode((prev) => {
      switch (prev) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'system';
        default:
          return 'light';
      }
    });
  });

  return [themeMode, setThemeMode, toggleThemeMode] as const;
}
