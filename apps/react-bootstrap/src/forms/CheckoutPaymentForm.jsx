import { Form, Button, Row, Col } from 'react-bootstrap'

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

      <Form.Group className="mb-3" controlId="rb-checkout-shipping">
        <Form.Label>Shipping method</Form.Label>
        <Form.Select name="shippingMethod" defaultValue="standard" required>
          <option value="standard">Standard Shipping</option>
          <option value="express">Express Shipping</option>
          <option value="overnight">Overnight Delivery</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-checkout-card">
        <Form.Label>Card number</Form.Label>
        <Form.Control name="cardNumber" type="text" maxLength={19} required />
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="rb-checkout-exp">
            <Form.Label>Expiration</Form.Label>
            <Form.Control
              name="expiration"
              type="text"
              placeholder="MM/YY"
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="rb-checkout-cvc">
            <Form.Label>CVC</Form.Label>
            <Form.Control name="cvc" type="password" maxLength={4} required />
          </Form.Group>
        </Col>
      </Row>

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
