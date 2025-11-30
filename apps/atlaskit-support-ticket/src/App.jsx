import { useState, useEffect } from 'react'
import { setGlobalTheme } from '@atlaskit/tokens'
import { Box } from '@atlaskit/primitives'
import FormComponent from './form/SupportTicketForm'
import './styles.css'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    setGlobalTheme({
      colorMode: currentTheme,
    })
  }, [currentTheme])

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setCurrentTheme(event.data.theme === 'dark' ? 'dark' : 'light')
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <Box padding="space.200">
      <FormComponent />
    </Box>
  )
}

export default App
