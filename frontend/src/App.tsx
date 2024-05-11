import React from 'react'
import { useAppSelector } from './store/hooks'
import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import router from './Routes'
import getDesignTokens from './assets/theme'

function App() {
    const mode = useAppSelector(state=>state.mode.mode)

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
           <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App