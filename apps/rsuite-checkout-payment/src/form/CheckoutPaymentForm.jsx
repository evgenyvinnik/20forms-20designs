import { Form, Button, SelectPicker } from 'rsuite'

const shippingOptions = [
  { label: 'Standard', value: 'standard' },
  { label: 'Express', value: 'express' },
  { label: 'Overnight', value: 'overnight' },
]

function CheckoutPaymentForm() {
  const handleSubmit = () => {
    alert('Checkout submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.ControlLabel>Email for receipt</Form.ControlLabel>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group controlId="shippingMethod">
        <Form.ControlLabel>Shipping method</Form.ControlLabel>
        <Form.Control
          name="shippingMethod"
          accepter={SelectPicker}
          data={shippingOptions}
          placeholder="Select shipping"
          block
          required
        />
      </Form.Group>

      <Form.Group controlId="cardNumber">
        <Form.ControlLabel>Card number</Form.ControlLabel>
        <Form.Control
          name="cardNumber"
          type="text"
          inputMode="numeric"
          maxLength={19}
          required
        />
      </Form.Group>

      <Form.Group controlId="expiration">
        <Form.ControlLabel>Expiration</Form.ControlLabel>
        <Form.Control
          name="expiration"
          type="text"
          placeholder="MM/YY"
          inputMode="numeric"
          required
        />
      </Form.Group>

      <Form.Group controlId="cvc">
        <Form.ControlLabel>CVC</Form.ControlLabel>
        <Form.Control
          name="cvc"
          type="text"
          inputMode="numeric"
          maxLength={4}
          required
        />
      </Form.Group>

      <Form.Group controlId="promoCode">
        <Form.ControlLabel>Promo code</Form.ControlLabel>
        <Form.Control name="promoCode" type="text" />
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Place order
        </Button>
      </Form.Group>
    </Form>
  )
}

export default CheckoutPaymentForm
