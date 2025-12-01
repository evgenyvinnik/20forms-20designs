import { Box, FormControl, TextInput, Button } from '@primer/react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order found!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Order number</FormControl.Label>
        <TextInput
          id="primer-order-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput id="primer-order-email" name="email" type="email" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Postal code</FormControl.Label>
        <TextInput
          id="primer-order-postal"
          name="postalCode"
          type="text"
          block
        />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Find order
      </Button>
    </Box>
  )
}

export default OrderTrackingForm
