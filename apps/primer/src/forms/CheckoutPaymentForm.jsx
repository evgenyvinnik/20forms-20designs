import { Box, FormControl, TextInput, Select, Button } from '@primer/react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order placed!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Email for receipt</FormControl.Label>
        <TextInput id="primer-checkout-email" name="email" type="email" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Shipping method</FormControl.Label>
        <Select id="primer-checkout-shipping" name="shippingMethod" block>
          <Select.Option value="">Select shipping</Select.Option>
          <Select.Option value="standard">Standard</Select.Option>
          <Select.Option value="express">Express</Select.Option>
          <Select.Option value="overnight">Overnight</Select.Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormControl.Label>Card number</FormControl.Label>
        <TextInput
          id="primer-checkout-cardnumber"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Expiration</FormControl.Label>
        <TextInput
          id="primer-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>CVC</FormControl.Label>
        <TextInput
          id="primer-checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          block
        />
      </FormControl>

      <FormControl>
        <FormControl.Label>Promo code</FormControl.Label>
        <TextInput
          id="primer-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          block
        />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Place order
      </Button>
    </Box>
  )
}

export default CheckoutPaymentForm
