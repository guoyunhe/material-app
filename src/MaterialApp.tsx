import { CssBaseline, ThemeProvider } from '@mui/material';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import FetchBackend from 'i18next-fetch-backend';
import { ReactNode, useMemo } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { MaterialAppConfig } from './MaterialAppConfig';
import { LanguageEffect } from './private/LanguageEffect';
import { defaultConfig, MaterialAppContext } from './private/MaterialAppContext';
import { useSystemColor } from './useSystemColor';
import { useThemeMode } from './useThemeMode';

export interface MaterialAppProps extends Partial<MaterialAppConfig> {
  children?: ReactNode;
}

export function MaterialApp({
  children,
  themes = defaultConfig.themes,
  languages = [],
}: MaterialAppProps) {
  const [themeMode] = useThemeMode();
  const systemColor = useSystemColor();
  const theme = themes?.[themeMode] || themes?.[systemColor];

  const i18n = useMemo(() => {
    const newI18n = i18next.createInstance();
    newI18n.use(FetchBackend);
    newI18n.use(LanguageDetector);
    newI18n.use(initReactI18next);
    newI18n.init(
      {
        fallbackLng: 'en',
        supportedLngs: languages.map((item) => item.value),
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
      },
      (err) => {
        console.error(err);
      },
    );
    return newI18n;
  }, []);

  return (
    <MaterialAppContext.Provider
      value={{
        languages,
        themes,
      }}
    >
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <LanguageEffect />
          {children}
        </ThemeProvider>
      </I18nextProvider>
    </MaterialAppContext.Provider>
  );
}
