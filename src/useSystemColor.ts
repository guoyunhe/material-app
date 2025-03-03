import { useMediaQuery } from '@mui/material';

export function useSystemColor() {
  return useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
}
