import { useEffect } from 'react';
import xior from 'xior';
import { useApp } from '../useApp';

export function AuthEffect() {
  const { authToken } = useApp();

  useEffect(() => {
    if (authToken) {
      xior.defaults.headers['Authorization'] = `Bearer ${authToken}`;
    } else {
      xior.defaults.headers['Authorization'] = '';
    }
  }, [authToken]);

  return null;
}
