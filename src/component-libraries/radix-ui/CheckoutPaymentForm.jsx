import {
  Box,
  Button,
  Checkbox,
  Flex,
  Select,
  Text,
  TextField,
} from '@radix-ui/themes'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Payment submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="payment-method">
            Payment method
          </Text>
          <Select.Root name="paymentMethod" defaultValue="credit">
            <Select.Trigger id="payment-method" />
            <Select.Content>
              <Select.Item value="credit">Credit Card</Select.Item>
              <Select.Item value="debit">Debit Card</Select.Item>
              <Select.Item value="paypal">PayPal</Select.Item>
            </Select.Content>
          </Select.Root>
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="payment-card-name">
            Name on card
          </Text>
          <TextField.Root
            id="payment-card-name"
            name="cardName"
            type="text"
            placeholder="Enter name on card"
            required
          />
        </Box>
        <Box>
          <Text
            as="label"
            size="2"
            weight="medium"
            htmlFor="payment-card-number"
          >
            Card number
          </Text>
          <TextField.Root
            id="payment-card-number"
            name="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
            required
          />
        </Box>
        <Flex gap="3">
          <Box style={{ flex: 1 }}>
            <Text as="label" size="2" weight="medium" htmlFor="payment-expiry">
              Expiry date
            </Text>
            <TextField.Root
              id="payment-expiry"
              name="expiry"
              type="text"
              placeholder="MM/YY"
              required
            />
          </Box>
          <Box style={{ flex: 1 }}>
            <Text as="label" size="2" weight="medium" htmlFor="payment-cvv">
              CVV
            </Text>
            <TextField.Root
              id="payment-cvv"
              name="cvv"
              type="text"
              placeholder="123"
              required
            />
          </Box>
        </Flex>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Checkbox name="saveCard" />
            Save card for future purchases
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Checkbox name="terms" required />I agree to the terms and
            conditions
          </Flex>
        </Text>
        <Button type="submit">Complete payment</Button>
      </Flex>
    </form>
  )
}

export default CheckoutPaymentForm
