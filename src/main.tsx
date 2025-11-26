import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes/routes.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

const router = createBrowserRouter([...publicRoutes, ...privateRoutes])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
