import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Report height to parent window for iframe resizing
function reportHeight() {
  const height = document.documentElement.scrollHeight
  window.parent.postMessage({ type: 'setHeight', height }, '*')
}

// Report height on load and on resize
window.addEventListener('load', reportHeight)
window.addEventListener('resize', reportHeight)

// Also report height after a short delay to account for dynamic content
setTimeout(reportHeight, 100)
