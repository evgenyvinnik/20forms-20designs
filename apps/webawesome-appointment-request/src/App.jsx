import { useState, useEffect } from 'react'
import '@awesome.me/webawesome/dist/styles/webawesome.css'
import FormComponent from './form/AppointmentRequestForm'

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
    document.documentElement.classList.remove('wa-light', 'wa-dark')
    document.documentElement.classList.add(
      theme === 'dark' ? 'wa-dark' : 'wa-light'
    )
  }, [theme])

  return (
    <div
      style={{
        padding: '16px',
        background: theme === 'dark' ? '#1a1a2e' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#000000',
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}

export default App
