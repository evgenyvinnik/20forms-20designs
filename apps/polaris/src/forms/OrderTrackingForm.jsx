import { useState, useCallback } from 'react'
import { FormLayout, TextField, Button } from '@shopify/polaris'

function OrderTrackingForm() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Order number"
          type="text"
          value={orderNumber}
          onChange={setOrderNumber}
          autoComplete="off"
          pattern="[A-Za-z0-9-]{6,20}"
          requiredIndicator
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <TextField
          label="Postal code"
          type="text"
          value={postalCode}
          onChange={setPostalCode}
          autoComplete="postal-code"
          requiredIndicator
        />
        <Button submit variant="primary">
          Find order
        </Button>
      </FormLayout>
    </form>
  )
}

export default OrderTrackingForm
