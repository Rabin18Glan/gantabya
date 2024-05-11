import React from 'react'
import Header from './layouts/header/Header'
import { Outlet } from 'react-router-dom'
import { createTheme, PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './store/hooks';


export default function Root() {
  return (

      <>
      <Header />
   <Outlet />
      </>
  
  );
}



