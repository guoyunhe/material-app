import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import xior from 'xior';

export function LanguageEffect() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // ajax header
    xior.defaults.headers['Accept-Language'] = i18n.language;
    // <html lang="zh-cn">
    document.documentElement.setAttribute('lang', i18n.language.toLowerCase());
  }, [i18n.language]);

  return null;
}
