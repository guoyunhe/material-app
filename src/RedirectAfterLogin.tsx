import { Navigate, useLocation } from 'react-router-dom';
import { AuthStatus } from './types';
import { useApp } from './useApp';

export function RedirectAfterLogin() {
  const { authStatus, loginRedirectPath } = useApp();
  const location = useLocation();

  if (authStatus === AuthStatus.LoggedIn) {
    return <Navigate to={location.state?.from?.pathname || loginRedirectPath} />;
  } else {
    return null;
  }
}
