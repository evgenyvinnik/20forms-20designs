import { Button, ButtonGroup, Form, TextField } from '@react-spectrum/s2'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="Order number"
        name="orderNumber"
        pattern="[A-Za-z0-9-]{6,20}"
        isRequired
      />
      <TextField label="Email address" name="email" type="email" isRequired />
      <TextField label="Postal code" name="postalCode" isRequired />
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Find order
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default OrderTrackingForm
