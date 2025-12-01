import { Button, Field, Input, Stack } from '@chakra-ui/react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Order number</Field.Label>
          <Input
            id="chakra-order-tracking-number"
            name="orderNumber"
            type="text"
            pattern="[A-Za-z0-9-]{6,20}"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input id="chakra-order-tracking-email" name="email" type="email" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Postal code</Field.Label>
          <Input
            id="chakra-order-tracking-postal"
            name="postalCode"
            type="text"
          />
        </Field.Root>
        <Button type="submit" colorPalette="blue">
          Find order
        </Button>
      </Stack>
    </form>
  )
}

export default OrderTrackingForm
