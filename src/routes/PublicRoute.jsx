import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CenteredContent from "../pages/CenteredContent";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CardDetail from "../pages/CardDetail";
import PrivateRoute from "./PrivateRoute";

const PublicRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={`/category/01`}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CenteredContent></CenteredContent>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <CardDetail></CardDetail>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Not Found</p>,
  },
]);

export default PublicRoute;
