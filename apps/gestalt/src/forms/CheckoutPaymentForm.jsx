import { useState } from 'react'
import { Box, Button, Flex, SelectList, TextField } from 'gestalt'

function CheckoutPaymentForm() {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-checkout-email"
          label="Email for receipt"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <SelectList
          id="gestalt-checkout-shipping-method"
          label="Shipping method"
          onChange={({ value }) => setShippingMethod(value)}

          value={shippingMethod}
        >
          {[
            { label: 'Standard', value: 'standard' },
            { label: 'Express', value: 'express' },
            { label: 'Overnight', value: 'overnight' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <TextField
          id="gestalt-checkout-card-number"
          label="Card number"
          onChange={({ value }) => setCardNumber(value)}
          type="text"
          value={cardNumber}
        />
        <TextField
          id="gestalt-checkout-expiration"
          label="Expiration"
          onChange={({ value }) => setExpiration(value)}
          placeholder="MM/YY"
          type="text"
          value={expiration}
        />
        <TextField
          id="gestalt-checkout-cvc"
          label="CVC"
          onChange={({ value }) => setCvc(value)}
          type="text"
          value={cvc}
        />
        <TextField
          id="gestalt-checkout-promo"
          label="Promo code"
          onChange={({ value }) => setPromoCode(value)}
          type="text"
          value={promoCode}
        />
        <Box>
          <Button color="red" text="Place order" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default CheckoutPaymentForm
