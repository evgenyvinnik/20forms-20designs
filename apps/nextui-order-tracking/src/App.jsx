import { useState, useEffect } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import FormComponent from './form/OrderTrackingForm'

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
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <NextUIProvider>
      <main
        className={`${theme} text-foreground bg-background min-h-screen p-4`}
      >
        <FormComponent />
      </main>
    </NextUIProvider>
  )
}

export default App
