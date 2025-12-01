import { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
import FormComponent from './form/TwoFactorAuthForm'

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

  const darkStyles = {
    background: '#1b1c1d',
    color: '#ffffff',
    minHeight: '100vh',
  }

  const lightStyles = {
    background: '#ffffff',
    color: '#000000',
    minHeight: '100vh',
  }

  return (
    <div style={theme === 'dark' ? darkStyles : lightStyles}>
      <div className={theme === 'dark' ? 'ui inverted segment' : 'ui segment'} style={{ margin: 0, borderRadius: 0, minHeight: '100vh' }}>
        <div style={{ padding: '16px' }}>
          <FormComponent inverted={theme === 'dark'} />
        </div>
      </div>
    </div>
  )
}

export default App
