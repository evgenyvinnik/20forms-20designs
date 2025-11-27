import { Box, Button, Flex, Text, TextField } from '@radix-ui/themes'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Tracking order...')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="tracking-order-id">
            Order ID
          </Text>
          <TextField.Root
            id="tracking-order-id"
            name="orderId"
            type="text"
            placeholder="Enter your order ID"
            required
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="tracking-email">
            Email address
          </Text>
          <TextField.Root
            id="tracking-email"
            name="email"
            type="email"
            placeholder="Enter email used for order"
            required
          />
        </Box>
        <Button type="submit">Track order</Button>
      </Flex>
    </form>
  )
}

export default OrderTrackingForm
