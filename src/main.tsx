import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Web3Provider from "./providers/Web3Provider.tsx";
import UIProvider from "./providers/UIProvider.tsx";
import QueryProvider from "./providers/QueryProvider.tsx";
import { router } from "./router";
import NetworkSynchronizer from "./providers/NetworkSynchronizer.tsx";

const root = document.getElementById("root");
if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <UIProvider>
        <Web3Provider>
          <QueryProvider>
            <NetworkSynchronizer />
            <RouterProvider router={router} />
          </QueryProvider>
        </Web3Provider>
      </UIProvider>
    </React.StrictMode>,
  );
}
