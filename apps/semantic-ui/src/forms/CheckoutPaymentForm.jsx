import { Form, Button, Select } from 'semantic-ui-react'

const shippingOptions = [
  { key: '', value: '', text: 'Select shipping' },
  { key: 'standard', value: 'standard', text: 'Standard' },
  { key: 'express', value: 'express', text: 'Express' },
  { key: 'overnight', value: 'overnight', text: 'Overnight' },
]

function CheckoutPaymentForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order placed!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-checkout-payment-email"
        name="email"
        label="Email for receipt"
        type="email"
        required
      />
      <Form.Field required>
        <label>Shipping method</label>
        <Select
          name="shippingMethod"
          options={shippingOptions}
          placeholder="Select shipping"
          required
        />
      </Form.Field>
      <Form.Input
        id="semantic-ui-checkout-payment-cardnumber"
        name="cardNumber"
        label="Card number"
        type="text"
        required
        maxLength={19}
        pattern="[0-9]{13,19}"
        inputMode="numeric"
      />
      <Form.Input
        id="semantic-ui-checkout-payment-expiration"
        name="expiration"
        label="Expiration"
        type="text"
        required
        placeholder="MM/YY"
        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
        inputMode="numeric"
      />
      <Form.Input
        id="semantic-ui-checkout-payment-cvc"
        name="cvc"
        label="CVC"
        type="text"
        required
        maxLength={4}
        pattern="[0-9]{3,4}"
        inputMode="numeric"
      />
      <Form.Input
        id="semantic-ui-checkout-payment-promo"
        name="promoCode"
        label="Promo code"
        type="text"
        pattern="[A-Za-z0-9]{3,15}"
      />
      <Button type="submit" primary>
        Place order
      </Button>
    </Form>
  )
}

export default CheckoutPaymentForm
