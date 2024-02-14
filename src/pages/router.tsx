import { createBrowserRouter } from 'react-router-dom'
import Layout from './app/Layout'
import { landingRoute } from './Landing'
import { treasuryRoute } from './Treasury'
import { dashboardRoute } from './Dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [landingRoute, dashboardRoute, treasuryRoute]
  }
])

export default router
