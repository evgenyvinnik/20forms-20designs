import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Dropdown, Button } from 'braid-design-system'

function CheckoutPaymentForm() {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-checkout-email"
          label="Email for receipt"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Dropdown
          id="braid-checkout-shipping-method"
          label="Shipping method"
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.target.value)}
          placeholder="Select shipping"
        >
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </Dropdown>

        <TextField
          id="braid-checkout-card-number"
          label="Card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          inputMode="numeric"
          required
        />

        <TextField
          id="braid-checkout-expiration"
          label="Expiration"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          placeholder="MM/YY"
          inputMode="numeric"
          required
        />

        <TextField
          id="braid-checkout-cvc"
          label="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          inputMode="numeric"
          required
        />

        <TextField
          id="braid-checkout-promo"
          label="Promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />

        <Box>
          <Button type="submit">Place order</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default CheckoutPaymentForm
