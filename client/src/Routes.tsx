import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Root from "./Root";
import Local from "./pages/Local";
import Global  from "./pages/Global";
import Location from "./pages/Location";
import Hotel from "./pages/Hotel";

const router = createBrowserRouter( 
  createRoutesFromElements(
    <>
    <Route path={'/'} element = {<Root />}>
<Route path ='/' element={<HomePage />}/>
<Route path ='/home' element={<HomePage />}/>
<Route path ='/Local' element={<Local />}/>
<Route path="/Global" element={<Global />}/>
<Route path="/location" element={<Location />}/>
<Route path="/hotel" element={<Hotel />}/>

    </Route>

    <Route path="login" element={<Login/>}/>

    </>
  )
)
export default router;
