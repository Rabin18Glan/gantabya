import React, { ReactElement, ComponentType } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';


interface WithAuthProps {
  children?: ReactElement;
}

const withAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {

  const AuthComponent: React.FC<T & WithAuthProps> = (props) => {
    const location = useLocation();
    const isLoggedIn = useAppSelector((state) => state.auth.status);
console.log(isLoggedIn)
    const currentPath = location.pathname;

    if (isLoggedIn && (currentPath === '/login' || currentPath === '/register'||currentPath == 'register/verify-email')) {
      return <Navigate to="/" />;
    }

    if (!isLoggedIn) {
      return <WrappedComponent {...props} />;
    }

    return <Navigate to="/" />;
  };

  return AuthComponent;
};

export default withAuth;
