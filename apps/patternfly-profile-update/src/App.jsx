import { useState, useEffect } from 'react'
import '@patternfly/react-core/dist/styles/base.css'
import FormComponent from './form/ProfileUpdateForm'

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
    if (theme === 'dark') {
      document.documentElement.classList.add('pf-v6-theme-dark')
    } else {
      document.documentElement.classList.remove('pf-v6-theme-dark')
    }
  }, [theme])

  return (
    <div
      style={{
        padding: '16px',
        background: theme === 'dark' ? '#1b1d21' : '#fff',
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}

export default App
