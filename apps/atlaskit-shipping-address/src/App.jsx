import { setGlobalTheme, token } from '@atlaskit/tokens'
import '@atlaskit/css-reset'
import ShippingAddressForm from './form/ShippingAddressForm'

setGlobalTheme({ colorMode: 'light' })

function App() {
  return (
    <div
      style={{
        padding: token('space.300', '24px'),
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: token('font.family.sans', 'sans-serif'),
      }}
    >
      <ShippingAddressForm />
    </div>
  )
}

export default App
