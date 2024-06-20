import { Outlet } from 'react-router-dom';
import Header from './layouts/header/Header';
import NavigationBar from './layouts/header/NavigationBar';


export default function Root() {

  return (
    <>
      <Header />
 <Outlet  />

    </>
  
  );
}



