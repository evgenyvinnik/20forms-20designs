import { setGlobalTheme, token } from '@atlaskit/tokens'
import '@atlaskit/css-reset'
import CheckoutPaymentForm from './form/CheckoutPaymentForm'

setGlobalTheme({ colorMode: 'light' })

function App() {
  return (
    <div
      style={{
        padding: token('space.300', '24px'),
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <CheckoutPaymentForm />
    </div>
  )
}

export default App
