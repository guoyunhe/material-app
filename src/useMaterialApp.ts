import { useContext } from 'react';
import { MaterialAppContext } from './private/MaterialAppContext';

export function useMaterialApp() {
  return useContext(MaterialAppContext);
}
