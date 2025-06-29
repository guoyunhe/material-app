import { createTheme } from '@mui/material';
import { createContext } from 'react';
import { MaterialAppConfig } from '../MaterialAppConfig';

export const light = createTheme({ palette: { mode: 'light' } });
export const dark = createTheme({ palette: { mode: 'dark' } });

export const defaultConfig: MaterialAppConfig = {
  themes: { light, dark },
  activeTheme: light,
};

export const MaterialAppContext = createContext<MaterialAppConfig>(defaultConfig);
