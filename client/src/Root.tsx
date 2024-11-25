import { Outlet } from 'react-router-dom';

import Header from './layouts/header/Header';

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}



