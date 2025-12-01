import { useState, useEffect } from 'react'
import IconSettings from '@salesforce/design-system-react/components/icon-settings'
import FormComponent from './form/UserRegistrationForm'

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

  return (
    <IconSettings iconPath="/assets/icons">
      <div
        className={theme === 'dark' ? 'slds-theme_dark' : ''}
        style={{
          padding: '16px',
          background: theme === 'dark' ? '#16325c' : '#fff',
          color: theme === 'dark' ? '#fff' : '#16325c',
          minHeight: '100vh',
        }}
      >
        <FormComponent theme={theme} />
      </div>
    </IconSettings>
  )
}

export default App
