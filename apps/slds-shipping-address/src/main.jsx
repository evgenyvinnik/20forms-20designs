import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'

let lastReportedHeight = 0

function reportHeight() {
  if (window.parent === window) return

  const root = document.getElementById('root')
  if (!root) return

  const height = root.scrollHeight

  if (Math.abs(height - lastReportedHeight) > 5) {
    lastReportedHeight = height
    window.parent.postMessage({ type: 'IFRAME_HEIGHT', height }, '*')
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

setTimeout(reportHeight, 200)
setTimeout(reportHeight, 500)
setTimeout(reportHeight, 1000)

window.addEventListener('load', () => setTimeout(reportHeight, 100))
