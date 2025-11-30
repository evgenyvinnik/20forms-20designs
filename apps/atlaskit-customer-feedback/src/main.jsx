import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Report height to parent for iframe resizing
function reportHeight() {
  const height = document.documentElement.scrollHeight
  window.parent.postMessage({ type: 'setHeight', height }, '*')
}

window.addEventListener('load', reportHeight)
window.addEventListener('resize', reportHeight)

const observer = new MutationObserver(reportHeight)
observer.observe(document.body, { childList: true, subtree: true, attributes: true })
