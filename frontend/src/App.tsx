
import { createTheme, CssBaseline } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom'; // Changed from RouterProvider to BrowserRouter
import router from './Routes';
import { useAppSelector } from './store/hooks';

function App() {
    const mode = useAppSelector(state => state.mode.mode);

    // Create the theme based on the mode
    const theme = createTheme({
        palette: {
            mode},
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
           
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
