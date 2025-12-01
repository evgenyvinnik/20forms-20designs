import { useState, useEffect } from 'react'
import { CustomProvider } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import FormComponent from './form/EventRegistrationForm'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

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
    <CustomProvider theme={currentTheme}>
      <div
        style={{
          padding: '16px',
          background: currentTheme === 'dark' ? '#0f131a' : '#fff',
          minHeight: '100vh',
        }}
      >
        <FormComponent />
      </div>
    </CustomProvider>
  )
}

export default App
