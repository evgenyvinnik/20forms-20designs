import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Button } from 'braid-design-system'

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
      <Stack space="medium">
        <TextField
          id="braid-order-tracking-number"
          label="Order number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          required
        />

        <TextField
          id="braid-order-tracking-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          id="braid-order-tracking-postal"
          label="Postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />

        <Box>
          <Button type="submit">Find order</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default OrderTrackingForm
