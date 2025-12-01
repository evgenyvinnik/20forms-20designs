import { Button, FormGroup, HTMLSelect, InputGroup } from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Email for receipt" labelFor="blueprint-checkout-email">
        <InputGroup
          id="blueprint-checkout-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Shipping method"
        labelFor="blueprint-checkout-shipping-method"
      >
        <HTMLSelect
          id="blueprint-checkout-shipping-method"
          name="shippingMethod"
          required
          fill
          options={[
            { label: 'Select shipping', value: '' },
            { label: 'Standard', value: 'standard' },
            { label: 'Express', value: 'express' },
            { label: 'Overnight', value: 'overnight' },
          ]}
        />
      </FormGroup>
      <FormGroup label="Card number" labelFor="blueprint-checkout-card-number">
        <InputGroup
          id="blueprint-checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Expiration" labelFor="blueprint-checkout-expiration">
        <InputGroup
          id="blueprint-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\\/\\d{2}$"
          inputMode="numeric"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="CVC" labelFor="blueprint-checkout-cvc">
        <InputGroup
          id="blueprint-checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Promo code" labelFor="blueprint-checkout-promo">
        <InputGroup
          id="blueprint-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          fill
        />
      </FormGroup>
      <Button intent="primary" type="submit">
        Place order
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
