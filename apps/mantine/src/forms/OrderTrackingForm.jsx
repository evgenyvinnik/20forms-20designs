import { Button, Stack, TextInput } from '@mantine/core'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-order-tracking-number"
          name="orderNumber"
          label="Order number"
          pattern="[A-Za-z0-9-]{6,20}"
          required
        />
        <TextInput
          id="mantine-order-tracking-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <TextInput
          id="mantine-order-tracking-postal"
          name="postalCode"
          label="Postal code"
          type="text"
          required
        />
        <Button type="submit">Find order</Button>
      </Stack>
    </form>
  )
}

export default OrderTrackingForm
