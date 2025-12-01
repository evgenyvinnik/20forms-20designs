import { Form, Button } from 'rsuite'

function OrderTrackingForm() {
  const handleSubmit = () => {
    alert('Order lookup submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="orderNumber">
        <Form.ControlLabel>Order number</Form.ControlLabel>
        <Form.Control name="orderNumber" type="text" required />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.ControlLabel>Email address</Form.ControlLabel>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group controlId="postalCode">
        <Form.ControlLabel>Postal code</Form.ControlLabel>
        <Form.Control name="postalCode" type="text" required />
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Find order
        </Button>
      </Form.Group>
    </Form>
  )
}

export default OrderTrackingForm
