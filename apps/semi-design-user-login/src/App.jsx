import { useState, useEffect } from 'react'
import UserLoginForm from './form/UserLoginForm'

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
      document.body.setAttribute('theme-mode', 'dark')
      document.body.style.backgroundColor = 'var(--semi-color-bg-0)'
      document.body.style.color = 'var(--semi-color-text-0)'
    } else {
      document.body.removeAttribute('theme-mode')
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }, [theme])

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <UserLoginForm />
    </div>
  )
}

export default App
