import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Root from "./Root";

import Vibes from "./pages/Vibes";
import Visited from "./pages/Visited";
import Explore from "./pages/Explore";

const router = createBrowserRouter( 
  createRoutesFromElements(
    <>
    <Route path={'/'} element = {<Root/>}>
<Route path ='/' element={<HomePage />}/>
<Route path ='/home' element={<HomePage />}/>
<Route path ='/explore' element={<Explore/>}/>
<Route path ='/vibes' element={<Vibes />}/>
<Route path ='/visited' element={<Visited />}/>
    </Route>

    <Route path="login" element={<Login/>}/>

    </>
  )
)
export default router;
