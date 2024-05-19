import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthStatus } from './types';
import { useApp } from './useApp';

export interface RequireLoginProps {
  children: ReactNode;
}

export function RequireLogin({ children }: RequireLoginProps) {
  const { authStatus, setAuthStatus, loginPath, logoutRedirectPath } = useApp();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthStatus.LoggedOut) {
      navigate(logoutRedirectPath);
      setAuthStatus(AuthStatus.NotLoggedIn);
    }
  }, [authStatus, setAuthStatus, logoutRedirectPath, navigate]);

  if (authStatus === AuthStatus.NotLoggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={loginPath} state={{ from: location }} />;
  }

  return <>{children}</>;
}
