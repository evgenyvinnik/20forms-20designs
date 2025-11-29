import { useState, useEffect } from 'react'
import { Classes } from '@blueprintjs/core'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import FormComponent from './form/PasswordResetForm'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  // Listen for theme changes from parent
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Apply dark class to document body for proper Blueprint dark mode support
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add(Classes.DARK); document.body.style.backgroundColor = '#1c2127'
    } else {
      document.body.classList.remove(Classes.DARK); document.body.style.backgroundColor = '#ffffff'
    }
  }, [theme])

  const className = theme === 'dark' ? Classes.DARK : ''
  const style = {
    padding: '16px',
    color: theme === 'dark' ? '#f6f7f9' : '#1c2127', backgroundColor: theme === 'dark' ? '#1c2127' : '#ffffff',
  }
  return (
    <div className={className} style={style}>
      <FormComponent />
    </div>
  )
}

export default App
