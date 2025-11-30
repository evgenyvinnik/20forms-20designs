import { useState, useEffect } from 'react'
import FormComponent from './form/OrderTrackingForm'
import '@progress/kendo-theme-default/dist/all.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('k-dark', theme === 'dark')
  }, [theme])

  return (
    <div
      style={{
        padding: '16px',
        background: theme === 'dark' ? '#1a1a1a' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}

export default App
