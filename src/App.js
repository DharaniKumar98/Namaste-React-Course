import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

// configuration of react-router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      { 
        path: "/grocery", 
        element: <Suspense fallback= {<h1>Loading....</h1>}><Grocery /></Suspense> },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// RouterProvider provides the configuration to the App.
root.render(<RouterProvider router={appRouter} />);
