import { Button, TextInput } from '@gravity-ui/uikit'

import { SingleSelectField, formStackStyle } from './common.jsx'

const shippingOptions = [
  { value: 'standard', content: 'Standard' },
  { value: 'express', content: 'Express' },
  { value: 'overnight', content: 'Overnight' },
]

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-checkout-email"
        label="Email for receipt"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <SingleSelectField
        id="gravity-checkout-shipping-method"
        label="Shipping method"
        name="shippingMethod"
        options={[
          { value: '', content: 'Select shipping' },
          ...shippingOptions,
        ]}
        placeholder="Select shipping"
      />
      <TextInput
        id="gravity-checkout-card-number"
        label="Card number"
        name="cardNumber"
        controlProps={{
          required: true,
          pattern: '[0-9]{13,19}',
          inputMode: 'numeric',
          maxLength: 19,
        }}
      />
      <TextInput
        id="gravity-checkout-expiration"
        label="Expiration"
        name="expiration"
        placeholder="MM/YY"
        controlProps={{
          required: true,
          inputMode: 'numeric',
          pattern: '^(0[1-9]|1[0-2])\\/\\d{2}$',
        }}
      />
      <TextInput
        id="gravity-checkout-cvc"
        label="CVC"
        name="cvc"
        controlProps={{
          required: true,
          inputMode: 'numeric',
          pattern: '[0-9]{3,4}',
          maxLength: 4,
        }}
      />
      <TextInput
        id="gravity-checkout-promo"
        label="Promo code"
        name="promoCode"
        controlProps={{ pattern: '[A-Za-z0-9]{3,15}' }}
      />
      <Button view="action" type="submit">
        Place order
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
