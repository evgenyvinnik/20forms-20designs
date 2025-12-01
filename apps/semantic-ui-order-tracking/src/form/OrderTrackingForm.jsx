import { Form, Button } from 'semantic-ui-react'

function OrderTrackingForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order found!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-order-tracking-ordernumber"
        name="orderNumber"
        label="Order number"
        type="text"
        required
        pattern="[A-Za-z0-9-]{6,20}"
      />
      <Form.Input
        id="semantic-ui-order-tracking-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Form.Input
        id="semantic-ui-order-tracking-postal"
        name="postalCode"
        label="Postal code"
        type="text"
        required
      />
      <Button type="submit" primary>
        Find order
      </Button>
    </Form>
  )
}

export default OrderTrackingForm
