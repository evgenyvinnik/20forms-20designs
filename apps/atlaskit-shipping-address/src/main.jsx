import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function reportHeight() {
  const height = document.documentElement.scrollHeight
  window.parent.postMessage({ type: 'setHeight', height }, '*')
}

const observer = new MutationObserver(reportHeight)
observer.observe(document.body, { childList: true, subtree: true, attributes: true })

window.addEventListener('load', reportHeight)
window.addEventListener('resize', reportHeight)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
