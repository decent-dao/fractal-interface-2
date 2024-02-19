import { createBrowserRouter } from "react-router-dom";
import Layout from "./routes/layout";
import Landing from "./routes/landing";
import Home, { homeLoader } from "./routes/home";
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
        path: "home",
        loader: ({ request }) => homeLoader(request),
        element: <Home />,
      },
    ],
  },
]);

export default router;
