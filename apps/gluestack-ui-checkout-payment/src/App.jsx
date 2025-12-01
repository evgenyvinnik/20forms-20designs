import { useState, useEffect } from 'react'
import { GluestackUIProvider, Box, config } from '@gluestack-ui/themed'
import FormComponent from './form/CheckoutPaymentForm'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') setTheme(event.data.theme)
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <GluestackUIProvider config={config} colorMode={theme}>
      <Box p="$4" bg={theme === 'dark' ? '$backgroundDark900' : '$backgroundLight0'} minHeight="100vh">
        <FormComponent theme={theme} />
      </Box>
    </GluestackUIProvider>
  )
}

export default App
