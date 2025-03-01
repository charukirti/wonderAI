import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router";
const AppLayout = lazy(() => import("./components/Layout/AppLayout"));
const Home = lazy(() => import("./pages/Home"));
const CreateTrip = lazy(() => import("./pages/CreateTrip"));
const TripDetails = lazy(() => import("./pages/TripDetails"));
const MyTrips = lazy(() => import("./pages/MyTrips"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
import ProtectedRoute from "./components/Layout/ProtectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/create-trip",
        element: <CreateTrip />,
      },
      {
        path: "/trip-details/:id",
        element: <TripDetails />,
      },
      {
        path: "/my-trips",
        element: <MyTrips />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
];

export const router = createBrowserRouter(routes);
