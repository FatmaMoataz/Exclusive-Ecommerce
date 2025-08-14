import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { WishlistProvider } from './context/WishlistContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
      <WishlistProvider>
      <App />
    </WishlistProvider>
    </BrowserRouter>
  </StrictMode>,
)
