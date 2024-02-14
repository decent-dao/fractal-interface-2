import { createBrowserRouter } from "react-router-dom"
import Layout from "./app/Layout"
import { dashboardRoute } from "./dashboard"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [dashboardRoute],
  },
])

export default router
