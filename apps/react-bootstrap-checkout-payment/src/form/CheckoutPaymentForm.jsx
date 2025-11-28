import { Form, Button } from 'react-bootstrap'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-checkout-email">
        <Form.Label>Email for receipt</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-checkout-shipping-method">
        <Form.Label>Shipping method</Form.Label>
        <Form.Select name="shippingMethod" required>
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-checkout-card-number">
        <Form.Label>Card number</Form.Label>
        <Form.Control
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-checkout-expiration">
        <Form.Label>Expiration</Form.Label>
        <Form.Control
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-checkout-cvc">
        <Form.Label>CVC</Form.Label>
        <Form.Control
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-checkout-promo">
        <Form.Label>Promo code</Form.Label>
        <Form.Control
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Place order
      </Button>
    </Form>
  )
}

export default CheckoutPaymentForm
