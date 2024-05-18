import { useStorage } from '@guoyunhe/react-storage';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import FetchBackend from 'i18next-fetch-backend';
import { ReactNode, useCallback, useMemo } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { AppContext } from './AppContext';
import { AuthEffect } from './private/AuthEffect';
import { LanguageEffect } from './private/LanguageEffect';
import { AppConfig, AuthStatus, ThemePreference } from './types';

export interface AppProviderProps
  extends Pick<AppConfig, 'theme' | 'darkTheme' | 'lightTheme' | 'languages'> {
  children?: ReactNode;
}

export function AppProvider({ children, ...config }: AppProviderProps) {
  const [themePreference, setThemePreference] = useStorage<ThemePreference>('theme', 'system');
  const systemTheme = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  const themeMode = themePreference === 'system' ? systemTheme : themePreference;
  const theme =
    themeMode === 'dark' ? config.darkTheme || config.theme : config.lightTheme || config.theme;

  const toggleThemePreference = useCallback(() => {
    setThemePreference((prev) => {
      switch (prev) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'system';
        default:
          return 'light';
      }
    });
  }, [setThemePreference]);

  const i18n = useMemo(() => {
    return i18next
      .createInstance({
        fallbackLng: 'en',
        supportedLngs: config.languages.map((item) => item.value),
        interpolation: {
          escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
        detection: {
          // order and from where user language should be detected
          order: ['navigator', 'cookie', 'localStorage', 'querystring', 'path', 'subdomain'],

          // keys or params to lookup language from
          lookupQuerystring: 'locale',
          lookupCookie: 'locale',
          lookupLocalStorage: 'locale',
          lookupFromPathIndex: 0,
          lookupFromSubdomainIndex: 0,

          caches: ['localStorage', 'cookie'],
        },
      })
      .use(FetchBackend)
      .use(LanguageDetector)
      .use(initReactI18next);
  }, []);

  const [authStatus, setAuthStatus] = useStorage('auth_status', AuthStatus.Unknown);
  const [authToken, setAuthToken] = useStorage<string | null>('auth_token', null);
  const [user, setUser] = useStorage('user', null);

  return (
    <AppContext.Provider
      value={{
        ...config,
        themePreference,
        setThemePreference,
        toggleThemePreference,
        themeMode,
        authStatus,
        setAuthStatus,
        authToken,
        setAuthToken,
        user,
        setUser,
      }}
    >
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <AuthEffect />
          <CssBaseline />
          <LanguageEffect />
          {children}
        </ThemeProvider>
      </I18nextProvider>
    </AppContext.Provider>
  );
}
