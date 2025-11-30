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

window.addEventListener('load', reportHeight)
window.addEventListener('resize', reportHeight)

const observer = new MutationObserver(reportHeight)
observer.observe(document.body, { subtree: true, childList: true, attributes: true })
