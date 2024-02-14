import React from "react"
import ReactDOM from "react-dom/client"
import Web3Provider from "./providers/Web3Provider.tsx"
import UIProvider from "./providers/UIProvider.tsx"
import QueryProvider from "./providers/QueryProvider.tsx"
import { RouterProvider } from "react-router-dom"
import { router } from "./pages/router.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider>
      <Web3Provider>
        <QueryProvider>
          <RouterProvider router={router} />
        </QueryProvider>
      </Web3Provider>
    </UIProvider>
  </React.StrictMode>
)
