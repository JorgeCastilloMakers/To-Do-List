import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {TaskContextProvider} from './context/TaskContext'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/Routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <BrowserRouter>
        <TaskContextProvider>
          <Routes></Routes>
        </TaskContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>

)
