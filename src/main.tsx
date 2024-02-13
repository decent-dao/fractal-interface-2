import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Web3Provider from './Providers/Web3Provider.tsx'
import UIProvider from './Providers/UIProvider.tsx'
import QueryProvider from './Providers/QueryProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <Web3Provider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </Web3Provider>
    </UIProvider>
  </React.StrictMode>,
)
