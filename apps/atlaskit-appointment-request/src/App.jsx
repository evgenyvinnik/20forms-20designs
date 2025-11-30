import { useEffect } from 'react'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import '@atlaskit/css-reset'
import AppointmentRequestForm from './form/AppointmentRequestForm'

function App() {
  useEffect(() => {
    setGlobalTheme({ colorMode: 'light' })
  }, [])

  return (
    <div
      style={{
        padding: token('space.300', '24px'),
        maxWidth: '480px',
        margin: '0 auto',
        fontFamily: token(
          'font.family.sans',
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        ),
      }}
    >
      <AppointmentRequestForm />
    </div>
  )
}

export default App
