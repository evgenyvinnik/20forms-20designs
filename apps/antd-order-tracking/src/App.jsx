import { useState, useEffect } from 'react'
import { ConfigProvider, theme } from 'antd'
import FormComponent from './form/OrderTrackingForm'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setCurrentTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'dark'
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
      <div
        style={{
          padding: '16px',
          background: currentTheme === 'dark' ? '#141414' : '#fff',
          minHeight: '100vh',
        }}
      >
        <FormComponent />
      </div>
    </ConfigProvider>
  )
}

export default App
