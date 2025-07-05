import type { RouteObject } from "react-router";

import Home from "../pages/Home";

const route: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
];
export default route;
