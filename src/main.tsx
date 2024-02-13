import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Web3Provider from './Providers/Web3Provider.tsx'
import UIProvider from './Providers/UIProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <Web3Provider>
        <App />
      </Web3Provider>
    </UIProvider>
  </React.StrictMode>,
)
