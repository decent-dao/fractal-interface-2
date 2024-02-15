import { createBrowserRouter } from "react-router-dom";
import Layout from "./routes/layout";
import Landing from "./routes/landing";
import Safe, { safeLoader } from "./routes/safe";
import Dashboard from "./routes/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "safe/:id",
        loader: safeLoader,
        element: <Safe />,
      },
    ],
  },
]);

export default router;
