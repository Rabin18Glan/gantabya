
import { RouterProvider } from 'react-router-dom'; // Changed from RouterProvider to BrowserRouter
import router from './Routes';
import Form from './features/authentication/components/register/Form';

function App() {


    return (
      
        <div  className='bg-white dark:bg-black'>
         
            <RouterProvider router={router} />
            {/* <Form /> */}
            </div>
    );
}

export default App;
