import { Form, TextField, Button, Flex } from '@adobe/react-spectrum'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order found!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Order number"
          name="orderNumber"
          type="text"
          isRequired
        />
        <TextField label="Email address" name="email" type="email" isRequired />
        <TextField
          label="Postal code"
          name="postalCode"
          type="text"
          isRequired
        />
        <Button type="submit" variant="accent">
          Find order
        </Button>
      </Flex>
    </Form>
  )
}

export default OrderTrackingForm
