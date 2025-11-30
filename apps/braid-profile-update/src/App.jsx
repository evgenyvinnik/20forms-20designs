import { useState, useEffect } from 'react'
import 'braid-design-system/reset'
import { BraidProvider, Box } from 'braid-design-system'
import apacTheme from 'braid-design-system/themes/apac'
import FormComponent from './form/ProfileUpdateForm'

import { darkMode } from 'braid-design-system/css'

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
      document.documentElement.classList.add(darkMode)
    } else {
      document.documentElement.classList.remove(darkMode)
    }
  }, [theme])

  return (
    <BraidProvider theme={apacTheme}>
      <Box
        padding="medium"
        background={theme === 'dark' ? 'surfaceDark' : 'surface'}
      >
        <FormComponent />
      </Box>
    </BraidProvider>
  )
}

export default App
