import { Box, Button, Input, Label, Select } from 'theme-ui'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Box mb={3}>
        <Label htmlFor="themeui-checkout-email">Email for receipt</Label>
        <Input id="themeui-checkout-email" name="email" type="email" required />
      </Box>
      <Box mb={3}>
        <Label htmlFor="themeui-checkout-shipping">Shipping method</Label>
        <Select
          id="themeui-checkout-shipping"
          name="shippingMethod"
          defaultValue="standard"
          required
        >
          <option value="standard">Standard Shipping</option>
          <option value="express">Express Shipping</option>
          <option value="overnight">Overnight Delivery</option>
        </Select>
      </Box>
      <Box mb={3}>
        <Label htmlFor="themeui-checkout-card">Card number</Label>
        <Input
          id="themeui-checkout-card"
          name="cardNumber"
          type="text"
          maxLength={19}
          required
        />
      </Box>
      <Box
        sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}
        mb={3}
      >
        <Box>
          <Label htmlFor="themeui-checkout-exp">Expiration</Label>
          <Input
            id="themeui-checkout-exp"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            required
          />
        </Box>
        <Box>
          <Label htmlFor="themeui-checkout-cvc">CVC</Label>
          <Input
            id="themeui-checkout-cvc"
            name="cvc"
            type="password"
            maxLength={4}
            required
          />
        </Box>
      </Box>
      <Box mb={3}>
        <Label htmlFor="themeui-checkout-promo">Promo code</Label>
        <Input
          id="themeui-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </Box>
      <Button type="submit">Place order</Button>
    </Box>
  )
}

export default CheckoutPaymentForm
