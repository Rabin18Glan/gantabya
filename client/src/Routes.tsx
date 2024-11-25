import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Root from "./Root";

import { 
  HomePage,
  Travel ,
  Location,
  Login,
  Register
} from "./pages";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={'/'} element={<Root />}>
        <Route path='/' element={<HomePage />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/location" element={<Location />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
  )
)
export default router;
