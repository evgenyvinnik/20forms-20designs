import { useState, useEffect } from 'react'
import { ThemeProvider, BaseStyles } from '@primer/react'
import FormComponent from './form/PrivacyConsentForm'

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
    <ThemeProvider colorMode={theme === 'dark' ? 'night' : 'day'}>
      <BaseStyles>
        <div style={{ padding: '16px' }}>
          <FormComponent />
        </div>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
