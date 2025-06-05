import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../modules/shared/Layout";
import { Signin, SignUp } from "../modules/Auth";
import AuthLayout from "../modules/Auth/AuthLayout";
import AuthSidebar from "../modules/Auth/components/AuthSidebar";
import ForgotPass from "../modules/Auth/pages/ForgotPass";

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
        path: "signup",
        Component: SignUp,
      },
      {
        path: "forgot-pass",
        Component: ForgotPass,
      },
    ],
  },
]);

export default router;
