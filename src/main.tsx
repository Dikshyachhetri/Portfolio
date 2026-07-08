import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// Use BASE_URL from Vite config ( / in dev, /Portfolio/ for GitHub Pages )
// Strip trailing slash for BrowserRouter basename
const base = (import.meta.env.BASE_URL ?? '').replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
