import '@atlaskit/css-reset'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import EventRegistrationForm from './form/EventRegistrationForm'

setGlobalTheme({ light: 'light', dark: 'dark', colorMode: 'auto' })

function App() {
  return (
    <div
      style={{
        padding: token('space.200', '16px'),
        fontFamily: token(
          'font.family.sans',
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        ),
      }}
    >
      <EventRegistrationForm />
    </div>
  )
}

export default App
