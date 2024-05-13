import { Outlet } from 'react-router-dom';
import Header from './layouts/header/Header';
import { useAppSelector } from './store/hooks';
import { createTheme, PaletteOptions, ThemeProvider } from '@mui/material';

import { amber, deepOrange, grey } from '@mui/material/colors';
import getDesignTokens from './theme/theme';


export default function Root() {
  const mode = useAppSelector(state=>state.mode.mode)

const theme = createTheme(getDesignTokens(mode));
  return (


      <ThemeProvider theme={theme}>
      <Header />
   <Outlet />
      </ThemeProvider>
  
  );
}



