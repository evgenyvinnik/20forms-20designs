import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Report height to parent window for iframe resizing
function reportHeight() {
  const height = document.documentElement.scrollHeight
  window.parent.postMessage({ type: 'setHeight', height }, '*')
}

// Report height on load and resize
window.addEventListener('load', reportHeight)
window.addEventListener('resize', reportHeight)

// Also report height after a short delay to catch any dynamic content
setTimeout(reportHeight, 100)
