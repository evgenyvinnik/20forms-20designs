import { Form, TextInput, Select, SelectItem, Button, Stack } from '@carbon/react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-checkout-email"
          name="email"
          type="email"
          labelText="Email for receipt"
          required
        />
        <Select
          id="carbon-checkout-shipping-method"
          name="shippingMethod"
          labelText="Shipping method"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select shipping" />
          <SelectItem value="standard" text="Standard" />
          <SelectItem value="express" text="Express" />
          <SelectItem value="overnight" text="Overnight" />
        </Select>
        <TextInput
          id="carbon-checkout-card-number"
          name="cardNumber"
          labelText="Card number"
          maxLength={19}
          required
        />
        <TextInput
          id="carbon-checkout-expiration"
          name="expiration"
          labelText="Expiration"
          placeholder="MM/YY"
          required
        />
        <TextInput
          id="carbon-checkout-cvc"
          name="cvc"
          labelText="CVC"
          maxLength={4}
          required
        />
        <TextInput
          id="carbon-checkout-promo"
          name="promoCode"
          labelText="Promo code"
        />
        <Button type="submit">Place order</Button>
      </Stack>
    </Form>
  )
}

export default CheckoutPaymentForm
