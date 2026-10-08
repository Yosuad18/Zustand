// StrictMode ayuda a detectar errores durante el desarrollo
import { StrictMode } from 'react'
// createRoot conecta React con el HTML de la página
import { createRoot } from 'react-dom/client'
// Importamos los estilos globales
import './index.css'
// Importamos el componente principal
import App from './App.tsx'

// Buscamos el div con id root en index.html y dibujamos App dentro
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
