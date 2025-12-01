import '@arco-design/web-react/dist/css/arco.css'
import { useEffect } from 'react'
import AppointmentRequestForm from './form/AppointmentRequestForm'

function App() {
  useEffect(() => {
    // Check URL for theme parameter
    const params = new URLSearchParams(window.location.search)
    const theme = params.get('theme')

    if (theme === 'dark') {
      document.body.setAttribute('arco-theme', 'dark')
      document.body.style.backgroundColor = 'var(--color-bg-1)'
      document.body.style.color = 'var(--color-text-1)'
    } else {
      document.body.removeAttribute('arco-theme')
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }, [])

  // Listen for theme changes from parent
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        if (event.data.theme === 'dark') {
          document.body.setAttribute('arco-theme', 'dark')
          document.body.style.backgroundColor = 'var(--color-bg-1)'
          document.body.style.color = 'var(--color-text-1)'
        } else {
          document.body.removeAttribute('arco-theme')
          document.body.style.backgroundColor = ''
          document.body.style.color = ''
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <AppointmentRequestForm />
    </div>
  )
}

export default App
