import { Box, Button, TextField } from '@mui/material'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-order-tracking-number"
        name="orderNumber"
        label="Order number"
        type="text"
        required
        inputProps={{ pattern: '[A-Za-z0-9-]{6,20}' }}
      />
      <TextField
        id="mui-order-tracking-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <TextField
        id="mui-order-tracking-postal"
        name="postalCode"
        label="Postal code"
        type="text"
        required
      />
      <Button type="submit" variant="contained">
        Find order
      </Button>
    </Box>
  )
}

export default OrderTrackingForm
