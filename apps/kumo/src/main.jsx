// Prebuilt Kumo stylesheet (no Tailwind build step needed)
import '@cloudflare/kumo/styles/standalone'
import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
