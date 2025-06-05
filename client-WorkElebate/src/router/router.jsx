import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../modules/shared/Layout";
import { Signin } from "../modules/Auth";
import AuthLayout from "../modules/Auth/AuthLayout";
import AuthSidebar from "../modules/Auth/components/AuthSidebar";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: App,
      },
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        Component: Signin,
      },
      {
        path: "sidebar",
        Component: AuthSidebar,
      },
    ],
  },
]);

export default router;
