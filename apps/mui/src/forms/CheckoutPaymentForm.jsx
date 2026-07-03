import { Box, Button, MenuItem, TextField } from '@mui/material'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-checkout-email"
        name="email"
        label="Email for receipt"
        type="email"
        required
      />

      <TextField
        id="mui-checkout-shipping-method"
        name="shippingMethod"
        label="Shipping method"
        select
        required
        defaultValue="standard"
      >
        <MenuItem value="standard">Standard Shipping</MenuItem>
        <MenuItem value="express">Express Shipping</MenuItem>
        <MenuItem value="overnight">Overnight Delivery</MenuItem>
      </TextField>

      <TextField
        id="mui-checkout-card-number"
        name="cardNumber"
        label="Card number"
        type="text"
        required
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]{13,19}',
          maxLength: 19,
        }}
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <TextField
          id="mui-checkout-expiration"
          name="expiration"
          label="Expiration"
          placeholder="MM/YY"
          required
        />
        <TextField
          id="mui-checkout-cvc"
          name="cvc"
          label="CVC"
          type="text"
          required
          inputProps={{ maxLength: 4 }}
        />
      </Box>

      <TextField
        id="mui-checkout-promo"
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
