import { Box, Button, MenuItem, TextField } from '@mui/material'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField id="checkout-email" name="email" label="Email for receipt" type="email" required />

      <TextField
        id="checkout-shipping-method"
        name="shippingMethod"
        label="Shipping method"
        select
        required
        defaultValue=""
      >
        <MenuItem value="">Select shipping</MenuItem>
        <MenuItem value="standard">Standard</MenuItem>
        <MenuItem value="express">Express</MenuItem>
        <MenuItem value="overnight">Overnight</MenuItem>
      </TextField>

      <TextField
        id="checkout-card-number"
        name="cardNumber"
        label="Card number"
        type="text"
        required
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]{13,19}', maxLength: 19 }}
      />

      <TextField
        id="checkout-expiration"
        name="expiration"
        label="Expiration"
        type="text"
        placeholder="MM/YY"
        required
        inputProps={{ pattern: '^(0[1-9]|1[0-2])\\/\\d{2}$', inputMode: 'numeric' }}
      />

      <TextField
        id="checkout-cvc"
        name="cvc"
        label="CVC"
        type="text"
        required
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]{3,4}', maxLength: 4 }}
      />

      <TextField
        id="checkout-promo"
        name="promoCode"
        label="Promo code"
        type="text"
        inputProps={{ pattern: '[A-Za-z0-9]{3,15}' }}
      />

      <Button type="submit" variant="contained">
        Place order
      </Button>
    </Box>
  )
}

export default CheckoutPaymentForm
