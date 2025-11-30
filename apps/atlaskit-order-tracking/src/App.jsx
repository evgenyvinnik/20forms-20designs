import '@atlaskit/css-reset'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import OrderTrackingForm from './form/OrderTrackingForm'

setGlobalTheme({ light: 'light', dark: 'dark', colorMode: 'auto' })

function App() {
  return (
    <div
      style={{
        padding: token('space.300', '24px'),
        fontFamily: token(
          'font.family.sans',
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        ),
        backgroundColor: token('elevation.surface', '#ffffff'),
        minHeight: '100vh',
      }}
    >
      <OrderTrackingForm />
    </div>
  )
}

export default App
