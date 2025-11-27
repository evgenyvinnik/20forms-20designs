import { Box, Button, Flex, Text, TextField, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Tracking order...')
  }

  return (
    <Theme>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-tracking-order-id"
            >
              Order ID
            </Text>
            <TextField.Root
              id="radix-tracking-order-id"
              name="orderId"
              type="text"
              placeholder="Enter your order ID"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-tracking-email"
            >
              Email address
            </Text>
            <TextField.Root
              id="radix-tracking-email"
              name="email"
              type="email"
              placeholder="Enter email used for order"
              required
            />
          </Box>
          <Button type="submit">Track order</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default OrderTrackingForm
