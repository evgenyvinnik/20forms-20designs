import { InputField, Button, Stack, Select } from '@kiwicom/orbit-components'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  const shippingOptions = [
    { label: 'Select shipping', value: '' },
    { label: 'Standard', value: 'standard' },
    { label: 'Express', value: 'express' },
    { label: 'Overnight', value: 'overnight' },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Email for receipt" name="email" type="email" required />
        <Select label="Shipping method" name="shippingMethod" options={shippingOptions} required />
        <InputField label="Card number" name="cardNumber" type="text" inputMode="numeric" maxLength={19} required />
        <InputField label="Expiration" name="expiration" type="text" placeholder="MM/YY" inputMode="numeric" required />
        <InputField label="CVC" name="cvc" type="text" inputMode="numeric" maxLength={4} required />
        <InputField label="Promo code" name="promoCode" type="text" />
        <Button type="primary" submit>Place order</Button>
      </Stack>
    </form>
  )
}

export default CheckoutPaymentForm
