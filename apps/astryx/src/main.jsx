import React from 'react'
import ReactDOM from 'react-dom/client'
import '@astryxdesign/core/reset.css'
import '@astryxdesign/core/astryx.css'
import '@astryxdesign/theme-neutral/theme.css'
import { registerIcons } from '@astryxdesign/core'
import { neutralIconRegistry } from '@astryxdesign/theme-neutral'
import App from './App'

registerIcons(neutralIconRegistry)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
