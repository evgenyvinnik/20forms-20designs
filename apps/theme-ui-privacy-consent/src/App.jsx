import { useState, useEffect } from 'react'
import { ThemeUIProvider } from 'theme-ui'
import FormComponent from './form/PrivacyConsentForm'

const lightTheme = {
  config: {
    useColorSchemeMediaQuery: false,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    border: '#ddd',
    inputBg: '#fff',
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading: 'inherit',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32, 64],
  radii: {
    default: 4,
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontSize: 2,
    },
  },
}

const darkTheme = {
  ...lightTheme,
  colors: {
    text: '#fff',
    background: '#1a1a1a',
    primary: '#0cf',
    secondary: '#60f',
    muted: '#333',
    border: '#555',
    inputBg: '#2a2a2a',
  },
}

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

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeUIProvider theme={currentTheme}>
      <div
        style={{
          padding: '16px',
          backgroundColor: currentTheme.colors.background,
          color: currentTheme.colors.text,
        }}
      >
        <FormComponent />
      </div>
    </ThemeUIProvider>
  )
}

export default App
