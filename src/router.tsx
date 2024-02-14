import { createBrowserRouter } from 'react-router-dom'
import Layout from './routes/layout'
import Landing from './routes/landing'
import Dashboard, { dashboardLoader } from './routes/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: ':id/dashboard',
        loader: dashboardLoader,
        element: <Dashboard />
      }
    ]
  }
])

export default router
