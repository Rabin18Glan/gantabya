// components/ProtectedRoute.js
import { useAppSelector } from '@/store/hooks';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';


interface IProtectedRouteProps{
children:ReactElement
}
const ProtectedRoute = ({ children }:IProtectedRouteProps) => {
  const isLoggedIn = useAppSelector(state=>state.auth.status);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
 