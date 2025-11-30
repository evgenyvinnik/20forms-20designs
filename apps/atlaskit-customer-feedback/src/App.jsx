import '@atlaskit/css-reset'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import CustomerFeedbackForm from './form/CustomerFeedbackForm'

setGlobalTheme({ light: 'light', colorMode: 'light' })

function App() {
  return (
    <div
      style={{
        padding: token('space.300', '24px'),
        minHeight: '100vh',
        backgroundColor: token('elevation.surface', '#ffffff'),
      }}
    >
      <CustomerFeedbackForm />
    </div>
  )
}

export default App
