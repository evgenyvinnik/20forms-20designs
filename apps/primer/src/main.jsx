import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Import both light and dark theme CSS for proper theme switching
import '@primer/primitives/dist/css/functional/themes/light.css'
import '@primer/primitives/dist/css/functional/themes/dark.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
