import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { SymThemeProvider } from './theme'
import { router } from './router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <SymThemeProvider>
      <RouterProvider router={router} />
    </SymThemeProvider>
  </React.StrictMode>
)
