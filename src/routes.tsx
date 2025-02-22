import { createBrowserRouter, RouteObject } from "react-router";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import CreateTrip from "./pages/CreateTrip";
import TripDetails from "./pages/TripDetails";
import MyTrips from "./pages/MyTrips";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/create-trip",
        element: <CreateTrip />,
      },

      {
        path: "/trip-deatils/:id",
        element: <TripDetails />,
      },

      {
        path: "/my-trips",
        element: <MyTrips />,
      },

      {
        path: "/auth/login",
        element: <Login />,
      },

      {
        path: "/auth/register",
        element: <Register />,
      },

      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
