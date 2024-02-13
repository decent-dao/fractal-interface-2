import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Web3Provider from './providers/Web3Provider.tsx'
import UIProvider from './providers/UIProvider.tsx'
import QueryProvider from './providers/QueryProvider.tsx'

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
