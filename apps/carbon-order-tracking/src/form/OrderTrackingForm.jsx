import { Form, TextInput, Button, Stack } from '@carbon/react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-order-tracking-number"
          name="orderNumber"
          labelText="Order number"
          required
        />
        <TextInput
          id="carbon-order-tracking-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <TextInput
          id="carbon-order-tracking-postal"
          name="postalCode"
          labelText="Postal code"
          required
        />
        <Button type="submit">Find order</Button>
      </Stack>
    </Form>
  )
}

export default OrderTrackingForm
