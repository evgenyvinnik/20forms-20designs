import { useState, useEffect } from 'react'
import { Provider, defaultTheme } from '@adobe/react-spectrum'
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

  return (
    <Provider theme={defaultTheme} colorScheme={theme}>
      <div style={{ padding: '16px' }}>
        <FormComponent />
      </div>
    </Provider>
  )
}

export default App
