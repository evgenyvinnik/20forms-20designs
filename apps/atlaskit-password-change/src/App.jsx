import { setGlobalTheme, token } from '@atlaskit/tokens'
import '@atlaskit/css-reset'
import PasswordChangeForm from './form/PasswordChangeForm'

setGlobalTheme({ light: 'light', dark: 'dark', colorMode: 'auto' })

function App() {
  return (
    <div
      style={{
        padding: token('space.300', '24px'),
        backgroundColor: token('elevation.surface', '#FFFFFF'),
        minHeight: '100vh',
      }}
    >
      <PasswordChangeForm />
    </div>
  )
}

export default App
