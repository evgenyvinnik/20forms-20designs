import { Button, TextInput } from '@gravity-ui/uikit'

import { formStackStyle } from './common.jsx'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-order-tracking-number"
        label="Order number"
        name="orderNumber"
        controlProps={{ required: true, pattern: '[A-Za-z0-9-]{6,20}' }}
      />
      <TextInput
        id="gravity-order-tracking-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-order-tracking-postal"
        label="Postal code"
        name="postalCode"
        controlProps={{ required: true }}
      />
      <Button view="action" type="submit">
        Find order
      </Button>
    </form>
  )
}

export default OrderTrackingForm
