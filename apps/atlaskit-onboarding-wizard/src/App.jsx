import '@atlaskit/css-reset'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import OnboardingWizardForm from './form/OnboardingWizardForm'

setGlobalTheme({ colorMode: 'light' })

function App() {
  return (
    <div style={{ padding: token('space.200', '16px') }}>
      <OnboardingWizardForm />
    </div>
  )
}

export default App
