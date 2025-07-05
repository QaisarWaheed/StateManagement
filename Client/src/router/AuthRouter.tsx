import type { RouteObject } from "react-router";

import AuthLayout from "../layouts/AtuhLayout";
import Login from "../pages/login";
import Signup from "../pages/Signup";

const route: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Signup",
        element: <Signup />,
      },
    ],
  },
];
export default route;
