import { Form, Button } from 'react-bootstrap'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}></Col>
        <Col md={6}></Col>
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
