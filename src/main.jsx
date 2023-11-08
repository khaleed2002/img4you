import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalProvider from './context/GlobalContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </GlobalProvider>
  </React.StrictMode>
)
