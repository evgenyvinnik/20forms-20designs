import { Box, Button, Form, FormField, Select, TextInput } from 'grommet'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Email for receipt"
        name="email"
        htmlFor="grommet-checkout-email"
        required
      >
        <TextInput id="grommet-checkout-email" name="email" type="email" />
      </FormField>
      <FormField
        label="Shipping method"
        name="shippingMethod"
        htmlFor="grommet-checkout-shipping-method"
        required
      >
        <Select
          id="grommet-checkout-shipping-method"
          name="shippingMethod"
          options={['Standard', 'Express', 'Overnight']}
          placeholder="Select shipping"
        />
      </FormField>
      <FormField
        label="Card number"
        name="cardNumber"
        htmlFor="grommet-checkout-card-number"
        required
      >
        <TextInput
          id="grommet-checkout-card-number"
          name="cardNumber"
          type="text"
          maxLength={19}
        />
      </FormField>
      <FormField
        label="Expiration"
        name="expiration"
        htmlFor="grommet-checkout-expiration"
        required
      >
        <TextInput
          id="grommet-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
        />
      </FormField>
      <FormField label="CVC" name="cvc" htmlFor="grommet-checkout-cvc" required>
        <TextInput
          id="grommet-checkout-cvc"
          name="cvc"
          type="text"
          maxLength={4}
        />
      </FormField>
      <FormField
        label="Promo code"
        name="promoCode"
        htmlFor="grommet-checkout-promo"
      >
        <TextInput id="grommet-checkout-promo" name="promoCode" type="text" />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Place order" />
      </Box>
    </Form>
  )
}

export default CheckoutPaymentForm
