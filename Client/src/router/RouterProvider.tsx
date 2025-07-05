import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router";
import AuthRouter from "./AuthRouter";
import HomeRouter from "./HomeRouter";

const router = createBrowserRouter([...AuthRouter, ...HomeRouter]);

const RouterProvider = () => {
  return <ReactRouterProvider router={router}></ReactRouterProvider>;
};
export default RouterProvider;
