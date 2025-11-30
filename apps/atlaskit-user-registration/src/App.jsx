import { useState, useEffect } from 'react'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import '@atlaskit/css-reset'
import FormComponent from './form/UserRegistrationForm'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    setGlobalTheme({ colorMode: currentTheme })
  }, [currentTheme])

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setCurrentTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: token('elevation.surface'),
        color: token('color.text'),
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}

export default App
