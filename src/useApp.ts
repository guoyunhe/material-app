import { useContext } from 'react';
import { AppContext } from './private/AppContext';

export function useApp() {
  return useContext(AppContext);
}
