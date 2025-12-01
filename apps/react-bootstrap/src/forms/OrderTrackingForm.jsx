import { Form, Button } from 'react-bootstrap'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-order-number">
        <Form.Label>Order number</Form.Label>
        <Form.Control
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-order-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-order-postal">
        <Form.Label>Postal code</Form.Label>
        <Form.Control name="postalCode" type="text" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Find order
      </Button>
    </Form>
  )
}

export default OrderTrackingForm
