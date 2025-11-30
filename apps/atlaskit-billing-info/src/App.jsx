import '@atlaskit/css-reset'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import BillingInfoForm from './form/BillingInfoForm'

setGlobalTheme({ colorMode: 'light' })

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: token('elevation.surface'),
        padding: token('space.300'),
      }}
    >
      <BillingInfoForm />
    </div>
  )
}

export default App
