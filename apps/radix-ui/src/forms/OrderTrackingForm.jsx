import { Box, Button, Flex, Text, TextField, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
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
              htmlFor="radix-tracking-order-number"
            >
              Order number
            </Text>
            <TextField.Root
              id="radix-tracking-order-number"
              name="orderNumber"
              type="text"
              placeholder="Enter your order number"
              pattern="[A-Za-z0-9-]{6,20}"
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
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-tracking-postal"
            >
              Postal code
            </Text>
            <TextField.Root
              id="radix-tracking-postal"
              name="postalCode"
              type="text"
              placeholder="Enter postal code"
              required
            />
          </Box>
          <Button type="submit">Find order</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default OrderTrackingForm
