import { createCompactTheme } from 'material-compact';
import { createContext } from 'react';
import { MaterialAppConfig } from '../MaterialAppConfig';

export const light = createCompactTheme({ palette: { mode: 'light' } });
export const dark = createCompactTheme({ palette: { mode: 'dark' } });

export const defaultConfig: MaterialAppConfig = {
  themes: { light, dark },
  languages: [],
};

export const MaterialAppContext = createContext<MaterialAppConfig>(defaultConfig);
