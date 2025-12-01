import { Button, Field, Input, Stack, NativeSelect } from '@chakra-ui/react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Email for receipt</Field.Label>
          <Input id="chakra-checkout-email" name="email" type="email" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Shipping method</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              id="chakra-checkout-shipping-method"
              name="shippingMethod"
            >
              <option value="">Select shipping</option>
              <option value="standard">Standard</option>
              <option value="express">Express</option>
              <option value="overnight">Overnight</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Field.Root required>
          <Field.Label>Card number</Field.Label>
          <Input
            id="chakra-checkout-card-number"
            name="cardNumber"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{13,19}"
            maxLength={19}
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Expiration</Field.Label>
          <Input
            id="chakra-checkout-expiration"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            inputMode="numeric"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>CVC</Field.Label>
          <Input
            id="chakra-checkout-cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            maxLength={4}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Promo code</Field.Label>
          <Input
            id="chakra-checkout-promo"
            name="promoCode"
            type="text"
            pattern="[A-Za-z0-9]{3,15}"
          />
        </Field.Root>
        <Button type="submit" colorPalette="blue">
          Place order
        </Button>
      </Stack>
    </form>
  )
}

export default CheckoutPaymentForm
