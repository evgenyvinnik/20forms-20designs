import { useState, useCallback } from 'react'
import { FormLayout, TextField, Button, Text } from '@shopify/polaris'

function OrderTrackingForm() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Tracking your order!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <Text as="p">
          Enter your order number and email address to track your order.
        </Text>
        <TextField
          label="Order number"
          type="text"
          value={orderNumber}
          onChange={setOrderNumber}
          autoComplete="off"
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
        <Button submit variant="primary">
          Track order
        </Button>
      </FormLayout>
    </form>
  )
}

export default OrderTrackingForm
