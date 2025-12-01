import { useState, useEffect } from 'react'
import 'braid-design-system/reset'
import { BraidProvider, Box } from 'braid-design-system'
import apacTheme from 'braid-design-system/themes/apac'
import UserRegistrationForm from './form/UserRegistrationForm'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'theme-change') {
        setDarkMode(event.data.darkMode)
        if (event.data.darkMode) {
          document.documentElement.classList.add('darkMode')
        } else {
          document.documentElement.classList.remove('darkMode')
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <BraidProvider theme={apacTheme}>
      <Box padding="large">
        <UserRegistrationForm />
      </Box>
    </BraidProvider>
  )
}

export default App
