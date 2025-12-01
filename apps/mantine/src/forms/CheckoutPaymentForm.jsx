import { Button, Stack, TextInput, Select } from '@mantine/core'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-checkout-email"
          name="email"
          label="Email for receipt"
          type="email"
          required
        />
        <Select
          id="mantine-checkout-shipping-method"
          name="shippingMethod"
          label="Shipping method"
          placeholder="Select shipping"
          data={[
            { value: 'standard', label: 'Standard' },
            { value: 'express', label: 'Express' },
            { value: 'overnight', label: 'Overnight' },
          ]}
          required
        />
        <TextInput
          id="mantine-checkout-card-number"
          name="cardNumber"
          label="Card number"
          inputMode="numeric"
          maxLength={19}
          required
        />
        <TextInput
          id="mantine-checkout-expiration"
          name="expiration"
          label="Expiration"
          placeholder="MM/YY"
          inputMode="numeric"
          required
        />
        <TextInput
          id="mantine-checkout-cvc"
          name="cvc"
          label="CVC"
          inputMode="numeric"
          maxLength={4}
          required
        />
        <TextInput
          id="mantine-checkout-promo"
          name="promoCode"
          label="Promo code"
        />
        <Button type="submit">Place order</Button>
      </Stack>
    </form>
  )
}

export default CheckoutPaymentForm
