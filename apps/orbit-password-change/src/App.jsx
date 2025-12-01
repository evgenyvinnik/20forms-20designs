import { useState, useEffect } from 'react'
import { OrbitProvider, defaultTheme } from '@kiwicom/orbit-components'
import PasswordChangeForm from './form/PasswordChangeForm'

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

  const isDark = theme === 'dark'

  return (
    <OrbitProvider theme={defaultTheme}>
      <div style={{ padding: '16px', background: isDark ? '#1a1a1a' : '#fff', color: isDark ? '#fff' : '#000', minHeight: '100vh' }}>
        <PasswordChangeForm />
      </div>
    </OrbitProvider>
  )
}

export default App
