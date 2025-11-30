import '@atlaskit/css-reset'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import NewsletterSubscriptionForm from './form/NewsletterSubscriptionForm'

// Set the global theme to light mode
setGlobalTheme({ light: 'light', dark: 'dark', colorMode: 'light' })

function App() {
  return (
    <div
      style={{
        padding: token('space.300', '24px'),
        fontFamily: token(
          'font.family.body',
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        ),
        backgroundColor: token('elevation.surface', '#FFFFFF'),
        minHeight: '100vh',
      }}
    >
      <NewsletterSubscriptionForm />
    </div>
  )
}

export default App
