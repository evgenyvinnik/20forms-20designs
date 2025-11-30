import { useState, useEffect } from 'react'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import FormComponent from './form/JobApplicationForm'

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
    const themeLink = document.getElementById('theme-link')
    if (themeLink) {
      themeLink.href =
        theme === 'dark'
          ? 'https://unpkg.com/primereact/resources/themes/lara-dark-indigo/theme.css'
          : 'https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css'
    } else {
      const link = document.createElement('link')
      link.id = 'theme-link'
      link.rel = 'stylesheet'
      link.href =
        theme === 'dark'
          ? 'https://unpkg.com/primereact/resources/themes/lara-dark-indigo/theme.css'
          : 'https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css'
      document.head.appendChild(link)
    }
  }, [theme])

  return (
    <PrimeReactProvider>
      <div
        style={{
          padding: '16px',
          background: theme === 'dark' ? '#1e1e1e' : '#ffffff',
          color: theme === 'dark' ? '#ffffff' : '#1e1e1e',
          minHeight: '100vh',
        }}
      >
        <FormComponent />
      </div>
    </PrimeReactProvider>
  )
}

export default App
