import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Root from "./Root";

import { 
  HomePage,
  Travel ,
  Location,
  Login,
  Register
} from "./pages";
import VerifyEmail from "./features/authentication/components/register/VerifyEmail";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={'/'} element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="travel" element={<Travel />} />
        <Route path="/location" element={<Location />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/register/verify-email" element = {<VerifyEmail />}/>
    </>
  )
)
export default router;
