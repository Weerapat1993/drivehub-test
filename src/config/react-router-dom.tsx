import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/index'
import ErrorPage from "../pages/_error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);