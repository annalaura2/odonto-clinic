import { createBrowserRouter } from "react-router-dom";
import { Error404 } from "../pages/404";
import { Home } from "../pages/home";
import Specialists from "../pages/specialists";
import Services from "../pages/services";
import { Layout } from "../layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/specialists",
        element: <Specialists />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ]
  },
  {
    path: "*",
    element: <Layout />,
    children:[
      {
        path: "*",
        element: <Error404 />,
      }
    ]
  },
]);

export { router };
