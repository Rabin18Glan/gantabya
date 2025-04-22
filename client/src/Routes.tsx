import Lottie from "lottie-react";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import Root from "./Root";
import rocket from './assets/lotties/rocket.json';
import { PageWrapper } from "./layouts";
import { Login } from "./pages";

const Home = lazy(() => import('./pages/Home'));
const Travel = lazy(() => import('./pages/Travel'));
const RideConnect = lazy(() => import('./pages/RideConnect'));
const DashBoard = lazy(() => import('./pages/DashBoard'));
const TourPackage = lazy(() => import('./pages/TourPackage'));

// const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const VerifyEmail = lazy(() => import('./features/authentication/components/register/VerifyEmail'));
const ScanQRcode = lazy(() => import('./pages/ScanQRcode'));


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Suspense fallback={<PageWrapper>
      <div className="flex justify-center items-center h-screen">
        <div className="w-96 h-96"><Lottie animationData={rocket} loop={true} /></div>
      </div>
    </PageWrapper>}>
      <ErrorBoundary fallback={<div>Some Error Occured</div>}>

        <Outlet />
      </ErrorBoundary>
    </Suspense>}>

      <Route
        element={
          <Root />
        }
      >
        {/* Protected routes */}
        <Route
          index
          element={

            <Home />



          }
        />
        <Route
          path="travel"
          element={

            <Travel />

          }
        />
        <Route
          path="dashboard"
          element={

            <DashBoard />

          }
        />

        <Route
          path="ride-connect"
          element={

            <RideConnect />

          }
        />

        <Route
          path="tour-package"
          element={

            <TourPackage />

          }
        />

        {/* Public routes */}


      </Route>
      <Route
        path="scan"
        element={

          <ScanQRcode />

        }
      />

      <Route
        path="login"
        element={<Login />}
      />
      <Route
        path="register"
        element={<Register />}
      />
      <Route
        path=" "
        element={<VerifyEmail />}
      />
    </Route>
  )
);

export  {router};