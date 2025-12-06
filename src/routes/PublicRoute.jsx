import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NewsLayout from "../layouts/NewsLayout";
import DynamicNewsCategory from "../pages/DynamicNewsCategory";

const PublicRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={`/categoryType/01`}></Navigate>,
      },
      {
        path: "/categoryType/:id",
        element: <DynamicNewsCategory></DynamicNewsCategory>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
  },
]);

export default PublicRoute;
