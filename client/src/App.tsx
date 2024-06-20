
import { RouterProvider } from 'react-router-dom'; // Changed from RouterProvider to BrowserRouter
import router from './Routes';

function App() {

    // Create the theme based on the mode


    return (
      
        <div className='bg-white dark:bg-black'><RouterProvider router={router} /></div>
    );
}

export default App;
