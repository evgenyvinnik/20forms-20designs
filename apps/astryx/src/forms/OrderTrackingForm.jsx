import { useState } from 'react'
import { TextInput, Button } from '@astryxdesign/core'

function OrderTrackingForm() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-order-tracking-number"
        name="orderNumber"
        type="text"
        label="Order number"
        pattern="[A-Za-z0-9-]{6,20}"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
        required
      />

      <TextInput
        id="astryx-order-tracking-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        id="astryx-order-tracking-postal"
        name="postalCode"
        type="text"
        label="Postal code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        required
      />

      <Button type="submit" variant="primary">
        Find order
      </Button>
    </form>
  )
}

export default OrderTrackingForm
