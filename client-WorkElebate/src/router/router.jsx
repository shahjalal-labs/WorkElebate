import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../modules/shared/Layout";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "../modules/jobs/AuthRoute";
import jobRoute from "../modules/jobs/JobRoute";
import JobDetails from "../modules/jobs/pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: App,
      },
      {
        path: "jobs/:id",
        element: <ProtectedRoute><JobDetails />,</ProtectedRoute>
      },
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },

  AuthRoute,
]);

export default router;
