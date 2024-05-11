import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, useLocation, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Root from "./Root";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter( 
  createRoutesFromElements(
    <>
    <Route path={'/'} element = {<Root/>}>
<Route path ='/' element={<HomePage />}/>
<Route path ='/home' element={<HomePage />}/>
    </Route>

    <Route path="login" element={<Login/>}/>

    </>
  )
)
export default router;
