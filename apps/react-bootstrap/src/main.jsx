import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Report height to parent window for auto-sizing iframes
let lastReportedHeight = 0

function reportHeight() {
  if (window.parent === window) return

  // Get actual content height from root element
  const root = document.getElementById('root')
  if (!root) return

  const height = root.scrollHeight

  // Only report if height changed significantly (avoid infinite loops)
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

// Report height after content loads and settles
setTimeout(reportHeight, 200)
setTimeout(reportHeight, 500)
setTimeout(reportHeight, 1000)

// Report on window load as fallback
window.addEventListener('load', () => setTimeout(reportHeight, 100))
