import { createBrowserRouter } from 'react-router-dom'
import Layout from './routes/layout'
import Landing from './routes/landing'
import Safe, { safeLoader } from './routes/safe'

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
        path: 'safe/:id',
        loader: safeLoader,
        element: <Safe />
      }
    ]
  }
])

export default router
