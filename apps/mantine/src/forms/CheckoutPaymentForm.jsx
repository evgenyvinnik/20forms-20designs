import { useState } from 'react'
import { Button, Group, Select, Stack, TextInput } from '@mantine/core'

function CheckoutPaymentForm() {
  const [shippingMethod, setShippingMethod] = useState('standard')

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
          value={shippingMethod}
          onChange={setShippingMethod}
          data={[
            { value: 'standard', label: 'Standard Shipping' },
            { value: 'express', label: 'Express Shipping' },
            { value: 'overnight', label: 'Overnight Delivery' },
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
        <Group grow>
          <TextInput
            id="mantine-checkout-expiration"
            name="expiration"
            label="Expiration"
            placeholder="MM/YY"
            required
          />
          <TextInput
            id="mantine-checkout-cvc"
            name="cvc"
            label="CVC"
            maxLength={4}
            required
          />
        </Group>
        <TextInput
          id="mantine-checkout-promo"
          name="promoCode"
          label="Promo code"
          pattern="[A-Za-z0-9]{3,15}"
        />
        <Button type="submit">Place order</Button>
      </Stack>
    </form>
  )
}

export default CheckoutPaymentForm
