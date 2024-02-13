import React from 'react'
import ReactDOM from 'react-dom/client'
import Web3Provider from './providers/Web3Provider.tsx'
import UIProvider from './providers/UIProvider.tsx'
import QueryProvider from './providers/QueryProvider.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Layout from './Layout.tsx'
import Daos from './Daos.tsx'
import Dao from './Dao.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "daos",
        element: <Daos />,
        children: [
          {
            path: ":id",
            element: <Dao />
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <Web3Provider>
        <QueryProvider>
          <RouterProvider router={router} />
        </QueryProvider>
      </Web3Provider>
    </UIProvider>
  </React.StrictMode>,
)
