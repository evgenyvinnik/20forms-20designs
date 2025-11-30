import { useState, useEffect } from 'react'
import { Theme } from '@carbon/react'
import FormComponent from './form/ContactInquiryForm'
import './styles.scss'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'g100' : 'white'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setCurrentTheme(event.data.theme === 'dark' ? 'g100' : 'white')
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <Theme theme={currentTheme}>
      <div className="app-container">
        <FormComponent />
      </div>
    </Theme>
  )
}

export default App
