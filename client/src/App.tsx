
import { RouterProvider } from 'react-router-dom'; // Changed from RouterProvider to BrowserRouter
import { useDarkMode } from './hooks/useDarkMode';
import {router} from './Routes';

function App() {
   useDarkMode();
 
    return (
      
        <div  className='bg-white dark:bg-black'>
         
            <RouterProvider router={router} />
         
            </div>
    );
}

export default App;
