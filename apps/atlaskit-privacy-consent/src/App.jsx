import '@atlaskit/css-reset'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import PrivacyConsentForm from './form/PrivacyConsentForm'

setGlobalTheme({ colorMode: 'light' })

function App() {
  return (
    <div style={{ padding: token('space.200', '16px') }}>
      <PrivacyConsentForm />
    </div>
  )
}

export default App
